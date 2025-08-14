document.addEventListener('DOMContentLoaded', function() {
    const capitalInput = document.getElementById('capital');
    const presetButtons = document.querySelectorAll('.preset-btn');
    const strategyDisplay = document.getElementById('strategy-display');
    
    // Set default strategy
    generateStrategy(100);
    
    // Input event
    capitalInput.addEventListener('input', function() {
        const amount = parseInt(this.value) || 100;
        generateStrategy(amount);
        updateActiveButton(amount);
    });
    
    // Preset button events
    presetButtons.forEach(button => {
        button.addEventListener('click', function() {
            const amount = parseInt(this.dataset.amount);
            capitalInput.value = amount;
            generateStrategy(amount);
            updateActiveButton(amount);
        });
    });
    
    // Update active button
    function updateActiveButton(amount) {
        presetButtons.forEach(button => {
            if (parseInt(button.dataset.amount) === amount) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
    
    // Generate strategy based on capital
    function generateStrategy(capital) {
        // Calculate risk amounts
        const lowRiskAmount = capital * 0.10;
        const highRiskAmount = capital * 0.18;
        
        // Calculate trade amounts for low risk
        const lowRiskSteps = [
            Math.round(lowRiskAmount * 0.2),
            Math.round(lowRiskAmount * 0.3),
            Math.round(lowRiskAmount * 0.5)
        ];
        
        // Calculate trade amounts for high risk
        const highRiskSteps = [
            Math.round(highRiskAmount * 0.11),
            Math.round(highRiskAmount * 0.17),
            Math.round(highRiskAmount * 0.28),
            Math.round(highRiskAmount * 0.44)
        ];
        
        // Daily profit target
        const dailyProfitMin = Math.round(capital * 0.04);
        const dailyProfitMax = Math.round(capital * 0.08);
        
        // Generate HTML
        strategyDisplay.innerHTML = `
            <div class="market-split">
                <h3>🔄 Market Split Logic</h3>
                <table class="market-table">
                    <tr>
                        <th>Days</th>
                        <th>Market Nature</th>
                        <th>Risk %</th>
                        <th>Risk Amount</th>
                        <th>Strategy Focus</th>
                    </tr>
                    <tr class="risk-low">
                        <td>Fri–Mon</td>
                        <td>Manipulated / OTC</td>
                        <td>10%</td>
                        <td>$${lowRiskAmount.toFixed(2)}</td>
                        <td>Mental health, low risk</td>
                    </tr>
                    <tr class="risk-high">
                        <td>Tue–Thu</td>
                        <td>Pre-planned movement</td>
                        <td>18%</td>
                        <td>$${highRiskAmount.toFixed(2)}</td>
                        <td>Strategic recovery & gain</td>
                    </tr>
                </table>
            </div>
            
            <div class="trade-steps">
                <h4><i class="fas fa-brain"></i> Fri–Mon: Mental Safety Mode (10% Risk = $${lowRiskAmount.toFixed(2)})</h4>
                <table class="step-table">
                    <tr>
                        <th>Trade Step</th>
                        <th>Trade Amount</th>
                        <th>Outcome</th>
                        <th>Next Step</th>
                    </tr>
                    <tr>
                        <td>1st Trade</td>
                        <td>$${lowRiskSteps[0]}</td>
                        <td>
                            <span class="win-outcome">✅ Win</span><br>
                            <span class="loss-outcome">❌ Loss</span>
                        </td>
                        <td>
                            Continue trading with $${lowRiskSteps[0]}<br>
                            Move to $${lowRiskSteps[1]} trade
                        </td>
                    </tr>
                    <tr>
                        <td>2nd Trade</td>
                        <td>$${lowRiskSteps[1]}</td>
                        <td>
                            <span class="win-outcome">✅ Win</span><br>
                            <span class="loss-outcome">❌ Loss</span>
                        </td>
                        <td>
                            Recover + profit<br>
                            Move to $${lowRiskSteps[2]} trade
                        </td>
                    </tr>
                    <tr>
                        <td>3rd Trade</td>
                        <td>$${lowRiskSteps[2]}</td>
                        <td>
                            <span class="win-outcome">✅ Win</span><br>
                            <span class="loss-outcome">❌ Loss</span>
                        </td>
                        <td>
                            Recover + profit<br>
                            <strong>STOP</strong> – SL hit at $${lowRiskAmount.toFixed(2)}
                        </td>
                    </tr>
                </table>
                <p class="note"><strong>Note:</strong> No compounding. No emotional chasing. Mental reset is part of the strategy.</p>
            </div>
            
            <div class="trade-steps">
                <h4><i class="fas fa-chart-line"></i> Tue–Thu: Strategic Mode (18% Risk = $${highRiskAmount.toFixed(2)})</h4>
                <table class="step-table">
                    <tr>
                        <th>Trade Step</th>
                        <th>Trade Amount</th>
                        <th>Outcome</th>
                        <th>Next Step</th>
                    </tr>
                    <tr>
                        <td>1st Trade</td>
                        <td>$${highRiskSteps[0]}</td>
                        <td>
                            <span class="win-outcome">✅ Win</span><br>
                            <span class="loss-outcome">❌ Loss</span>
                        </td>
                        <td>
                            Continue trading with $${highRiskSteps[0]}<br>
                            Move to $${highRiskSteps[1]} trade
                        </td>
                    </tr>
                    <tr>
                        <td>2nd Trade</td>
                        <td>$${highRiskSteps[1]}</td>
                        <td>
                            <span class="win-outcome">✅ Win</span><br>
                            <span class="loss-outcome">❌ Loss</span>
                        </td>
                        <td>
                            Recover + profit<br>
                            Move to $${highRiskSteps[2]} trade
                        </td>
                    </tr>
                    <tr>
                        <td>3rd Trade</td>
                        <td>$${highRiskSteps[2]}</td>
                        <td>
                            <span class="win-outcome">✅ Win</span><br>
                            <span class="loss-outcome">❌ Loss</span>
                        </td>
                        <td>
                            Recover + profit<br>
                            Move to $${highRiskSteps[3]} trade
                        </td>
                    </tr>
                    <tr>
                        <td>4th Trade</td>
                        <td>$${highRiskSteps[3]}</td>
                        <td>
                            <span class="win-outcome">✅ Win</span><br>
                            <span class="loss-outcome">❌ Loss</span>
                        </td>
                        <td>
                            Back to $${highRiskSteps[1]} trade<br>
                            <strong>STOP</strong> – SL hit at $${highRiskAmount.toFixed(2)}
                        </td>
                    </tr>
                </table>
                <p class="note"><strong>Note:</strong> Recovery logic is built-in. No emotional compounding. Focus on structure.</p>
            </div>
            
            <div class="philosophy">
                <h4>🎯 Daily Goal & Trading Philosophy</h4>
                <ul>
                    <li><strong>✅ Target only ${dailyProfitMin}-${dailyProfitMax}% profit per day</strong> ($${dailyProfitMin}-$${dailyProfitMax})</li>
                    <li><strong>🚫 No overtrading</strong> – fewer, smarter trades</li>
                    <li><strong>🔒 No compounding or doubling promises</strong></li>
                    <li><strong>🙏 If you join Yetitrade expecting to double your money quickly, I'm sorry—this isn't the place for that.</strong></li>
                    <li><strong>🧠 We trade with discipline, not dreams.</strong></li>
                </ul>
            </div>
        `;
    }
});
