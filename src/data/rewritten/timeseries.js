export const timeSeriesStructure = {
  module1: {
    title: 'Module 1: Introduction to Time Series',
    topics: [
      { id: 'intro', title: 'What is Time Series?' },
      { id: 'forecasting-need', title: 'Need for Forecasting' },
      { id: 'univariate-multivariate', title: 'Univariate vs Multivariate' },
      { id: 'special-features', title: 'Special Features of Time Series' },
      { id: 'components', title: 'Components of Time Series' },
      { id: 'decomposition', title: 'Time Series Decomposition' },
      { id: 'eda', title: 'Exploratory Data Analysis' },
    ]
  },
  module2: {
    title: 'Module 2: Moving Average & Smoothing',
    topics: [
      { id: 'moving-average', title: 'Moving Average' },
      { id: 'simple-forecasting', title: 'Simple Forecasting' },
      { id: 'ses', title: 'Simple Exponential Smoothing' },
      { id: 'holt', title: 'Holt (Double Exponential)' },
      { id: 'holt-winters', title: 'Holt-Winters (Triple)' },
      { id: 'evaluation', title: 'Forecast Evaluation' },
    ]
  },
  module3: {
    title: 'Module 3: Stationary Processes',
    topics: [
      { id: 'stationarity', title: 'Stationary Processes' },
      { id: 'adf-test', title: 'Dickey-Fuller Test' },
      { id: 'lag-differencing', title: 'Lag and Differencing' },
      { id: 'arma', title: 'ARMA(p,q) Processes' },
      { id: 'acf-pacf', title: 'ACF and PACF' },
      { id: 'estimation', title: 'Parameter Estimation' },
    ]
  },
  module4: {
    title: 'Module 4: Non-Stationary Processes',
    topics: [
      { id: 'arima', title: 'ARIMA Models' },
      { id: 'aic', title: 'AIC and Model Evaluation' },
      { id: 'sarima', title: 'Seasonal ARIMA (SARIMA)' },
      { id: 'sarima-forecast', title: 'Forecasting SARIMA' },
    ]
  },
  module5: {
    title: 'Module 5: Multivariate Time Series',
    topics: [
      { id: 'var', title: 'VAR Model' },
      { id: 'var-forecast', title: 'VAR Forecasting' },
      { id: 'varma', title: 'VARMA Model' },
      { id: 'mar', title: 'Multivariate AR Processes' },
      { id: 'deep-tsf', title: 'Deep Learning for TSF' },
    ]
  }
}

export const timeSeriesContent = {
  module1: {
    intro: {
      title: 'What is Time Series?',
      subtitle: 'Data ordered in time — where sequence matters',
      sections: [
        {
          heading: 'What is a Time Series?',
          text: 'A time series is a sequence of data points collected at successive time intervals. Unlike regular datasets, the order of observations carries meaning. Shuffling the rows destroys the signal.',
          list: [
            'Ordered by time: each observation has a timestamp',
            'Dependencies exist between past and future values',
            'Patterns include trend, seasonality, and cycles',
            'Used in finance, weather, sales, and health monitoring'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'A time series observation can be expressed as a combination of components.',
          example: {
            title: 'Example: Decomposing monthly sales',
            code: 'Y(t) = Trend(t) + Seasonal(t) + Irregular(t)\n\nObserved sales in March:\n  Trend = 10,000\n  Seasonal boost = +2,500\n  Random noise = -300\n  Y = 10,000 + 2,500 - 300 = 12,200',
            output: 'Breaking the series into parts makes it easier to model and forecast.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Not all sequential data is the same.',
          table: {
            headers: ['Aspect', 'Continuous', 'Discrete'],
            rows: [
              ['Definition', 'Observed at every instant', 'Observed at fixed intervals'],
              ['Examples', 'Temperature sensors, stock tick data', 'Daily sales, monthly rainfall'],
              ['When to use', 'High-frequency monitoring', 'Business reporting, planning']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Shuffling time series like regular data (fix: preserve chronological order always)',
            'Mistake 2: Ignoring timestamps and treating values as independent (fix: index by date/time)',
            'Mistake 3: Assuming all patterns are trends (fix: check for seasonality and cycles too)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Time series analysis powers decisions across industries.',
          list: [
            'Finance: stock price prediction and volatility modeling',
            'Retail: inventory planning based on seasonal sales patterns',
            'Healthcare: predicting patient admissions and disease spread'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Time series = ordered data where sequence matters',
            'Four components: trend, seasonality, cycle, irregular',
            'Can be univariate or multivariate',
            'Never shuffle — order is the signal',
            'Decomposition helps reveal hidden patterns'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why can\'t we shuffle a time series like regular tabular data?\nAns: The temporal order carries information; shuffling destroys dependencies.',
            'Q2: Name the four components of a time series.\nAns: Trend, seasonality, cyclical, and irregular (noise).',
            'Q3: What is the difference between continuous and discrete time series?\nAns: Continuous is observed at every instant; discrete at fixed intervals.'
          ]
        }
      ]
    },
    'forecasting-need': {
      title: 'Need for Forecasting',
      subtitle: 'Why we predict the future from the past',
      sections: [
        {
          heading: 'What is Forecasting?',
          text: 'Forecasting uses historical data to predict future values. It reduces uncertainty and enables planning before outcomes are known.',
          list: [
            'Helps allocate resources before demand arrives',
            'Supports risk management and contingency planning',
            'Enables strategic long-term decisions',
            'Provides benchmarks to measure actual performance against'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Forecast accuracy degrades as the horizon lengthens.',
          example: {
            title: 'Example: Forecast horizon and error',
            code: 'Next-day temperature forecast: MAPE ≈ 5%\nNext-week forecast: MAPE ≈ 15%\nNext-month forecast: MAPE ≈ 30%\n\nConfidence intervals widen:\n  Day 1: 25°C ± 1°C\n  Day 7: 25°C ± 4°C',
            output: 'Short-term forecasts are more reliable than long-term ones.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Forecast horizons demand different methods.',
          table: {
            headers: ['Aspect', 'Short-Term', 'Long-Term'],
            rows: [
              ['Range', 'Hours to weeks', 'Months to years'],
              ['Methods', 'ARIMA, exponential smoothing', 'Structural models, expert judgment'],
              ['Accuracy', 'Higher', 'Lower — uncertainty compounds']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating forecasts as guarantees (fix: present confidence intervals, not point estimates)',
            'Mistake 2: Using the same model for all horizons (fix: match method to horizon length)',
            'Mistake 3: Ignoring external factors like holidays or promotions (fix: include event calendars as features)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Forecasting drives operational decisions daily.',
          list: [
            'Retail: stocking shelves before holiday demand spikes',
            'Energy: scheduling power plants based on predicted load',
            'Finance: hedging portfolios against predicted market moves'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Forecasting = predicting future from past patterns',
            'Accuracy drops as horizon increases',
            'Match method to horizon: short vs long term',
            'Always show uncertainty, not just point predictions',
            'External events can override historical patterns'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why do longer-horizon forecasts have larger errors?\nAns: Uncertainty compounds over time; more things can change.',
            'Q2: Which methods suit short-term vs long-term forecasting?\nAns: Short: ARIMA, smoothing; Long: structural models, judgment.',
            'Q3: Why is a naive forecast (last value) a strong benchmark?\nAns: It sets a minimum bar; any model must beat simplicity.'
          ]
        }
      ]
    },
    'univariate-multivariate': {
      title: 'Univariate vs Multivariate Time Series',
      subtitle: 'One variable or many — choosing the right setup',
      sections: [
        {
          heading: 'What is Univariate vs Multivariate?',
          text: 'Univariate series tracks one variable over time. Multivariate tracks several simultaneously, allowing variables to influence each other.',
          list: [
            'Univariate: simpler models, fewer data requirements',
            'Multivariate: richer context, captures cross-variable effects',
            'Univariate example: daily temperature alone',
            'Multivariate example: temperature, humidity, and pressure together'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Univariate uses only past values of itself; multivariate uses past values of all variables.',
          example: {
            title: 'Example: Predicting temperature',
            code: 'Univariate model:\n  Temp(t) = f(Temp(t-1), Temp(t-2)) + error\n\nMultivariate model:\n  Temp(t) = f(Temp(t-1), Humidity(t-1), Pressure(t-1)) + error\n\nThe multivariate model has more inputs\nand often better accuracy.',
            output: 'Adding related variables can improve forecasts if they are predictive.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Each approach has trade-offs.',
          table: {
            headers: ['Aspect', 'Univariate', 'Multivariate'],
            rows: [
              ['Data needed', 'Single series', 'Multiple aligned series'],
              ['Complexity', 'Lower (ARIMA, ETS)', 'Higher (VAR, VARMA)'],
              ['Use case', 'Simple forecasting', 'Causal relationships']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Adding irrelevant variables (fix: use Granger causality or feature selection)',
            'Mistake 2: Forgetting that multivariate series must be aligned by time (fix: merge on timestamp, handle missing values)',
            'Mistake 3: Assuming more variables always help (fix: start simple, validate each addition)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Both approaches are widely used.',
          list: [
            'Univariate: predicting a single product\'s sales with only its history',
            'Multivariate: GDP, inflation, and interest rate modeled together',
            'Hybrid: using external regressors in ARIMAX for better accuracy'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Univariate = one variable, its own past only',
            'Multivariate = multiple variables, cross-influences allowed',
            'More variables ≠ always better — relevance matters',
            'Multivariate needs aligned timestamps',
            'Start simple, add complexity only if it improves accuracy'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: When should you use a multivariate model?\nAns: When other variables have predictive power for the target.',
            'Q2: What is a key data requirement for multivariate series?\nAns: All series must share the same time index and be properly aligned.',
            'Q3: Name two univariate and two multivariate models.\nAns: Univariate: ARIMA, ETS; Multivariate: VAR, VARMA.'
          ]
        }
      ]
    },
    'special-features': {
      title: 'Special Features of Time Series',
      subtitle: 'Temporal dependence, heteroscedasticity, and structural breaks',
      sections: [
        {
          heading: 'What Makes Time Series Special?',
          text: 'Time series data has unique characteristics that distinguish it from cross-sectional data. Understanding these special features is essential for choosing appropriate models and avoiding common pitfalls.',
          list: [
            'Temporal dependence: observations are correlated with their past values',
            'Non-independence: each observation depends on previous ones, violating standard statistical assumptions',
            'Heteroscedasticity: variance can change over time (volatility clustering)',
            'Structural breaks: sudden shifts in mean, variance, or relationships',
            'Irregular spacing: missing observations or uneven time intervals'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Autocorrelation measures the dependence between observations at different time lags.',
          example: {
            title: 'Example: Temporal Dependence',
            code: 'White noise (no dependence):\n  Y(t) = ε(t),  ε(t) ~ N(0, σ²)\n  Corr(Y(t), Y(t-1)) = 0\n\nAR(1) process (strong dependence):\n  Y(t) = 0.8×Y(t-1) + ε(t)\n  Corr(Y(t), Y(t-1)) = 0.8\n  Corr(Y(t), Y(t-2)) = 0.64\n\nTemporal dependence means\nstandard regression assumptions fail.',
            output: 'High autocorrelation invalidates standard statistical tests.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Cross-sectional vs time series data assumptions.',
          table: {
            headers: ['Aspect', 'Cross-Sectional', 'Time Series'],
            rows: [
              ['Independence', 'Observations are independent', 'Observations are dependent'],
              ['Sample size', 'Number of entities', 'Number of time points'],
              ['Mean/Variance', 'Constant across samples', 'May change over time'],
              ['Standard errors', 'Standard formulas valid', 'Need robust/Newey-West'],
              ['Modeling', 'OLS regression', 'ARIMA, exponential smoothing']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Applying standard OLS without accounting for autocorrelation (fix: use ARIMA errors or Newey-West standard errors)',
            'Mistake 2: Ignoring structural breaks (fix: use Chow tests or regime-switching models)',
            'Mistake 3: Assuming constant variance when volatility clusters (fix: use GARCH models for conditional heteroscedasticity)',
            'Mistake 4: Treating irregular spacing as regular (fix: interpolate or use continuous-time models)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Special features shape modeling choices in every domain.',
          list: [
            'Finance: volatility clustering requires GARCH models for risk management',
            'Economics: structural breaks (recessions, policy changes) need regime-switching models',
            'Healthcare: missing observations in patient monitoring require imputation or irregular-time methods'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Time series violates independence — observations are temporally correlated',
            'Autocorrelation invalidates standard statistical inference',
            'Heteroscedasticity means variance changes over time',
            'Structural breaks require detection and modeling',
            'Always check for these special features before choosing a model'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does standard OLS fail for time series data?\nAns: OLS assumes independent observations; time series has temporal dependence (autocorrelation).',
            'Q2: What is heteroscedasticity in time series?\nAns: Variance that changes over time, often clustering after large shocks.',
            'Q3: What is a structural break and why does it matter?\nAns: A sudden shift in the data-generating process; ignoring it leads to biased models and poor forecasts.'
          ]
        }
      ]
    },
    components: {
      title: 'Components of Time Series',
      subtitle: 'Breaking a series into its building blocks',
      sections: [
        {
          heading: 'What are the Components?',
          text: 'Every time series can be split into four parts: trend, seasonality, cyclical, and irregular. Understanding them helps you choose the right model.',
          list: [
            'Trend: long-term direction (up, down, flat)',
            'Seasonality: repeating patterns at fixed intervals',
            'Cyclical: long-term oscillations without fixed period',
            'Irregular: random noise that cannot be predicted'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Additive vs multiplicative decomposition formulas.',
          example: {
            title: 'Example: Additive decomposition',
            code: 'Y(t) = Trend(t) + Seasonal(t) + Irregular(t)\n\nMonthly sales data:\n  Trend = 10,000 (upward slowly)\n  Seasonal (Dec boost) = +5,000\n  Irregular = -200\n  Y(Dec) = 10,000 + 5,000 - 200 = 14,800',
            output: 'Additive model assumes seasonal swings stay constant in size.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Additive vs multiplicative behavior.',
          table: {
            headers: ['Aspect', 'Additive', 'Multiplicative'],
            rows: [
              ['Formula', 'Y = T + S + I', 'Y = T × S × I'],
              ['Seasonal size', 'Constant regardless of level', 'Scales with trend level'],
              ['When to use', 'Stable amplitude', 'Amplitude grows with trend']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming all series are additive (fix: plot seasonality across levels; if amplitude grows, use multiplicative)',
            'Mistake 2: Confusing cyclical with seasonal (fix: seasonal has fixed period; cyclical does not)',
            'Mistake 3: Trying to model irregular noise (fix: accept noise as random; focus on T, S, C)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Component analysis drives modeling choices.',
          list: [
            'Retail: strong seasonality → use Holt-Winters or SARIMA',
            'Economics: business cycles → cyclical adjustment',
            'Sensor data: irregular noise → smoothing techniques'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Four components: T (trend), S (seasonality), C (cycle), I (irregular)',
            'Additive: seasonal size is constant',
            'Multiplicative: seasonal size scales with level',
            'Identify the dominant components before choosing a model',
            'Irregular is noise — do not try to predict it'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the difference between trend and seasonality?\nAns: Trend is long-term direction; seasonality is a repeating short-term pattern.',
            'Q2: When should you use multiplicative decomposition?\nAns: When seasonal amplitude grows as the trend level increases.',
            'Q3: What does the irregular component represent?\nAns: Random, unpredictable fluctuations that cannot be modeled.'
          ]
        }
      ]
    },
    decomposition: {
      title: 'Time Series Decomposition',
      subtitle: 'Separating signal from noise',
      sections: [
        {
          heading: 'What is Decomposition?',
          text: 'Decomposition splits a time series into its components so you can analyze each separately. It reveals hidden patterns and validates model assumptions.',
          list: [
            'Statistical decomposition uses moving averages to isolate trend',
            'STL decomposition is robust and handles any seasonality length',
            'Residuals should look like random noise after decomposition',
            'Decomposition informs whether differencing is needed'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Moving average trend extraction.',
          example: {
            title: 'Example: 3-period centered moving average',
            code: 'Raw data: [10, 12, 14, 13, 15]\n\nMA(3):\n  Period 2: (10 + 12 + 14) / 3 = 12.0\n  Period 3: (12 + 14 + 13) / 3 = 13.0\n  Period 4: (14 + 13 + 15) / 3 = 14.0\n\nTrend estimate: [_, 12, 13, 14, _]\nDetrended = Raw - Trend',
            output: 'The smoothed series approximates the underlying trend.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Classical vs STL decomposition.',
          table: {
            headers: ['Aspect', 'Classical', 'STL'],
            rows: [
              ['Trend', 'Simple moving average', 'Loess smoothing'],
              ['Seasonality', 'Fixed over time', 'Can change over time'],
              ['Robustness', 'Sensitive to outliers', 'Outlier-resistant']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using the wrong model type (additive vs multiplicative) (fix: inspect seasonal amplitude at high and low trend levels)',
            'Mistake 2: Not checking residuals after decomposition (fix: plot residuals; they should look like white noise)',
            'Mistake 3: Decomposing before confirming regular spacing (fix: ensure no missing timestamps)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Decomposition is a standard preprocessing step.',
          list: [
            'Retail: isolating holiday spikes from long-term growth',
            'Economics: removing seasonal effects to reveal true GDP growth',
            'Manufacturing: separating equipment drift from random vibration'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Decomposition splits series into T, S, and I',
            'Choose additive or multiplicative based on seasonal amplitude',
            'STL is more flexible than classical decomposition',
            'Always inspect residuals afterward',
            'Trend extraction uses moving averages or loess'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What does STL stand for and why is it preferred?\nAns: Seasonal and Trend decomposition using Loess; it handles changing seasonality and outliers.',
            'Q2: How do you choose between additive and multiplicative?\nAns: Check if seasonal swings stay the same size or grow with the trend.',
            'Q3: What should residuals look like after good decomposition?\nAns: Random white noise with no remaining pattern.'
          ]
        }
      ]
    },
    eda: {
      title: 'Exploratory Data Analysis',
      subtitle: 'Seeing the story before modeling',
      sections: [
        {
          heading: 'What is EDA for Time Series?',
          text: 'EDA for time series means visualizing patterns before building models. The right plots reveal trends, outliers, and seasonality at a glance.',
          list: [
            'Line plot: the essential first look at raw data',
            'Seasonal plot: data grouped by month, day, or hour',
            'Lag plot: y(t) vs y(t-k) for autocorrelation',
            'ACF/PACF: correlation structure at different lags',
            'Histogram: distribution of values'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Autocorrelation measures how correlated a series is with its past values.',
          example: {
            title: 'Example: Lag-1 autocorrelation',
            code: 'Series: [10, 12, 14, 13, 15]\n\nLag-1 pairs: (10,12), (12,14), (14,13), (13,15)\nCorrelation = 0.78\n\nHigh lag-1 correlation → strong\npersistence; past values predict\nfuture values well.',
            output: 'ACF plots show which lags carry predictive power.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'ACF vs PACF.',
          table: {
            headers: ['Aspect', 'ACF', 'PACF'],
            rows: [
              ['Measures', 'Total correlation at lag k', 'Direct correlation removing intermediate lags'],
              ['Use', 'Identify MA order', 'Identify AR order'],
              ['Pattern for AR', 'Tails off gradually', 'Cuts off after lag p']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Jumping to modeling without plotting (fix: always start with line plot and decomposition)',
            'Mistake 2: Ignoring missing dates (fix: check for gaps and impute or account for them)',
            'Mistake 3: Reading ACF/PACF on non-stationary data (fix: difference first, then inspect)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'EDA prevents costly modeling mistakes.',
          list: [
            'Spotting a 2019 anomaly in sales data before forecasting',
            'Discovering weekly seasonality in website traffic',
            'Finding that temperature has strong lag-1 correlation (persistence)'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Always plot before modeling',
            'Line plot → seasonal plot → ACF/PACF',
            'ACF identifies MA order; PACF identifies AR order',
            'Check for gaps, outliers, and structural breaks',
            'EDA saves time by revealing the right model family early'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why should you never skip EDA before modeling?\nAns: Plots reveal the structure that determines which model to use.',
            'Q2: What does a sharp cutoff in PACF suggest?\nAns: An AR process of order equal to the lag where cutoff occurs.',
            'Q3: What should you check before interpreting ACF?\nAns: Whether the series is stationary; non-stationary data gives misleading ACF.'
          ]
        }
      ]
    }
  },
  module2: {
    'moving-average': {
      title: 'Moving Average',
      subtitle: 'Smoothing noise to reveal the underlying signal',
      sections: [
        {
          heading: 'What is a Moving Average?',
          text: 'A moving average replaces each point with the average of nearby points. It reduces random noise and makes trends easier to see.',
          list: [
            'Simple Moving Average (SMA): equal weights for all points in the window',
            'Larger window = smoother curve, but more lag',
            'Centered MA avoids phase shift for visualization',
            'Moving averages are also used to estimate seasonal components'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'SMA of window size k at time t averages the k most recent values.',
          example: {
            title: 'Example: 5-day SMA for stock prices',
            code: 'Prices: [100, 102, 101, 105, 103, 107, 106]\n\nSMA(5) at day 5:\n  (100 + 102 + 101 + 105 + 103) / 5 = 102.2\n\nSMA(5) at day 6:\n  (102 + 101 + 105 + 103 + 107) / 5 = 103.6\n\nThe smoothed series lags behind\nbut shows the clearer trend.',
            output: 'SMA reveals the trend hidden in noisy daily prices.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'SMA vs centered vs weighted.',
          table: {
            headers: ['Aspect', 'SMA', 'Centered MA', 'Weighted MA'],
            rows: [
              ['Calculation', 'Average of past k points', 'Average of k/2 before and after', 'Weighted average of past points'],
              ['Lag', 'Yes — shifts right', 'No lag', 'Less lag than SMA'],
              ['Use case', 'Forecasting, trending', 'Visualizing trend', 'Giving more weight to recent data']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using centered MA for forecasting (fix: centered MA is only for visualization; use trailing MA for forecasts)',
            'Mistake 2: Choosing window size arbitrarily (fix: match window to the seasonal period you want to remove)',
            'Mistake 3: Forgetting that MA introduces lag (fix: account for lag when timing decisions)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Moving averages are everywhere.',
          list: [
            'Stock trading: 50-day and 200-day MAs signal buy/sell crossovers',
            'Weather: 7-day average temperature smooths daily fluctuations',
            'Sales: 4-week MA removes weekly seasonality to show true trend'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Moving average = local mean to reduce noise',
            'Larger window = smoother but more lag',
            'Centered MA is for plotting, not forecasting',
            'Match window size to the pattern you want to remove',
            'Trailing MA is used for actual forecasts'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does a larger window produce more lag?\nAns: It averages more past values, so it responds slower to recent changes.',
            'Q2: When should you use centered vs trailing MA?\nAns: Centered for visualization; trailing for forecasting.',
            'Q3: What window size removes quarterly seasonality from monthly data?\nAns: A 4-period centered moving average.'
          ]
        }
      ]
    },
    'simple-forecasting': {
      title: 'Simple Forecasting Methods',
      subtitle: 'Naive, average, and drift — the baselines that matter',
      sections: [
        {
          heading: 'What are Simple Forecasting Methods?',
          text: 'Before building complex models, establish simple benchmarks. If your fancy model cannot beat a naive method, it is not useful.',
          list: [
            'Naive: tomorrow equals today — best for random walks',
            'Mean: tomorrow equals the historical average — best for flat series',
            'Drift: extend the average historical change — best for trending series',
            'These are surprisingly hard to beat on many real datasets'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The drift method extends the average observed change per period.',
          example: {
            title: 'Example: Drift method',
            code: 'Data: [100, 105, 103, 108, 110]\n\nTotal change = 110 - 100 = 10\nAverage change per period = 10 / 4 = 2.5\n\nForecast(period 6) = 110 + 2.5 = 112.5\nForecast(period 7) = 110 + 5.0 = 115.0',
            output: 'Drift captures trend better than naive or mean alone.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Three baseline methods compared.',
          table: {
            headers: ['Aspect', 'Naive', 'Mean', 'Drift'],
            rows: [
              ['Formula', 'F(t+1) = Y(t)', 'F = mean(all history)', 'F(t+h) = Y(t) + h × average change'],
              ['Trend', 'Ignored', 'Ignored', 'Captured'],
              ['Best for', 'No trend, no seasonality', 'Stable, flat series', 'Linear trend']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Skipping baseline comparison (fix: always compare models against naive/mean/drift)',
            'Mistake 2: Using mean for trending data (fix: use drift or trend-aware models instead)',
            'Mistake 3: Updating the mean with future data in backtests (fix: use expanding or rolling window on past-only data)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Baselines set the bar for model acceptance.',
          list: [
            'Energy: naive forecast for stable baseload power demand',
            'Finance: random walk hypothesis says naive is optimal for prices',
            'Retail: mean forecast for products with flat, non-seasonal demand'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Naive = last value; surprisingly strong benchmark',
            'Mean = historical average; best for flat series',
            'Drift = extend average change; captures linear trend',
            'Always compare complex models to these baselines',
            'If ARIMA cannot beat naive, rethink your approach'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is the naive method a strong benchmark?\nAns: Many real series behave like random walks where the best prediction is the last value.',
            'Q2: When is the mean method appropriate?\nAns: When the series has no trend and fluctuates around a stable level.',
            'Q3: What does drift capture that naive does not?\nAns: A linear trend by extending the average historical change per period.'
          ]
        }
      ]
    },
    ses: {
      title: 'Simple Exponential Smoothing',
      subtitle: 'Weighted average that forgets the distant past',
      sections: [
        {
          heading: 'What is SES?',
          text: 'Simple Exponential Smoothing (SES) computes a weighted average where weights decrease exponentially into the past. Recent observations matter more.',
          list: [
            'Smoothing parameter α controls how fast old data is forgotten',
            'α near 1 = very responsive; α near 0 = very smooth',
            'SES maintains a single level component — no trend or seasonality',
            'Optimal α can be found by minimizing forecast error'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The level update equation combines the latest observation with the previous level.',
          example: {
            title: 'Example: SES with α = 0.3',
            code: 'Level(t) = α × Actual(t) + (1-α) × Level(t-1)\n\nInitial Level(0) = 100\nPeriod 1 (Actual = 110):\n  Level(1) = 0.3×110 + 0.7×100 = 103\n\nPeriod 2 (Actual = 105):\n  Level(2) = 0.3×105 + 0.7×103 = 103.6\n\nForecast = latest Level',
            output: 'Larger α makes the level follow recent values more closely.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'High vs low α behavior.',
          table: {
            headers: ['Aspect', 'α = 0.1', 'α = 0.5', 'α = 0.9'],
            rows: [
              ['Responsiveness', 'Very slow', 'Moderate', 'Very fast'],
              ['Smoothing', 'Heavy', 'Moderate', 'Minimal'],
              ['Best for', 'Stable, low-noise data', 'Typical business data', 'Rapidly changing data']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using SES on data with trend or seasonality (fix: use Holt or Holt-Winters instead)',
            'Mistake 2: Setting α arbitrarily (fix: optimize α by minimizing MSE on a validation set)',
            'Mistake 3: Forgetting to set a reasonable initial level (fix: use the mean of first few observations)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'SES is ideal for stable, non-seasonal demand.',
          list: [
            'Utility usage: stable residential electricity consumption',
            'Call center staffing: predictable daily volume without strong trends',
            'Inventory: reorder points for steady-selling items'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'SES = exponentially weighted average of past values',
            'α controls responsiveness: 0 = smooth, 1 = reactive',
            'Only models level — no trend or seasonality',
            'Optimize α, do not guess it',
            'Use Holt or Holt-Winters if trend/seasonality exists'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What happens when α = 1 in SES?\nAns: The forecast becomes the naive method — only the last observation matters.',
            'Q2: Why can\'t SES handle trend?\nAns: It only tracks a single level; there is no trend component.',
            'Q3: How do you choose the best α?\nAns: Minimize forecast error (MSE or MAE) on a validation set.'
          ]
        }
      ]
    },
    holt: {
      title: 'Holt (Double Exponential Smoothing)',
      subtitle: 'Tracking level and trend together',
      sections: [
        {
          heading: 'What is Holt\'s Method?',
          text: 'Holt extends SES by adding a trend component. It maintains two smoothed values: level and trend. This allows forecasting of data with a linear trend.',
          list: [
            'Level equation: smooths the raw data adjusted for trend',
            'Trend equation: smooths the change in level over time',
            'Two parameters: α (level smoothing) and β (trend smoothing)',
            'Forecast = level + h × trend for horizon h'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Holt updates level and trend separately, then combines them for forecasts.',
          example: {
            title: 'Example: Holt with α=0.3, β=0.2',
            code: 'Level(t) = α × Actual(t) + (1-α) × [Level(t-1) + Trend(t-1)]\nTrend(t) = β × [Level(t) - Level(t-1)] + (1-β) × Trend(t-1)\n\nData: [100, 110, 123, 135, 148]\n\nAt period 5:\n  Level = 148.2\n  Trend = 12.5\n\nForecast(period 6) = 148.2 + 1×12.5 = 160.7\nForecast(period 7) = 148.2 + 2×12.5 = 173.2',
            output: 'Holt extends the latest trend into the future.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'SES vs Holt.',
          table: {
            headers: ['Aspect', 'SES', 'Holt'],
            rows: [
              ['Components', 'Level only', 'Level + Trend'],
              ['Parameters', 'α', 'α + β'],
              ['Forecast', 'Flat (constant)', 'Linear (sloped)'],
              ['Use case', 'No trend', 'Trend, no seasonality']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Letting trend grow forever (fix: dampen trend for long horizons — use damped Holt)',
            'Mistake 2: Using Holt on seasonal data (fix: use Holt-Winters instead)',
            'Mistake 3: Setting β too high, making trend too reactive (fix: start with β = 0.1 and tune)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Holt handles linear growth patterns.',
          list: [
            'SaaS metrics: forecasting MRR with steady monthly growth',
            'Population: city growth with approximately linear increase',
            'Manufacturing: production output rising at a constant rate'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Holt = SES + trend component',
            'Two parameters: α (level) and β (trend)',
            'Forecast = level + h × trend',
            'Trend can over-extend; damp for long horizons',
            'Use Holt-Winters if seasonality is present'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What does Holt add that SES lacks?\nAns: A trend component that allows sloped forecasts.',
            'Q2: What is the danger of an undamped trend?\nAns: Forecasts grow without bound, becoming unrealistic.',
            'Q3: When should you switch from Holt to Holt-Winters?\nAns: When you detect seasonal patterns in the residuals.'
          ]
        }
      ]
    },
    'holt-winters': {
      title: 'Holt-Winters (Triple Exponential Smoothing)',
      subtitle: 'Level, trend, and seasonality in one model',
      sections: [
        {
          heading: 'What is Holt-Winters?',
          text: 'Holt-Winters extends Holt by adding a seasonal component. It is the go-to method for data with trend and repeating seasonal patterns.',
          list: [
            'Three components: level, trend, and seasonal',
            'Three parameters: α, β, and γ (seasonal smoothing)',
            'Additive or multiplicative seasonality',
            'Widely used in business forecasting for its simplicity and accuracy'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Holt-Winters updates level, trend, and seasonal factors each period.',
          example: {
            title: 'Example: Multiplicative Holt-Winters',
            code: 'Level(t) = α × [Actual(t) / Seasonal(t-m)] + (1-α) × [Level(t-1) + Trend(t-1)]\nTrend(t) = β × [Level(t) - Level(t-1)] + (1-β) × Trend(t-1)\nSeasonal(t) = γ × [Actual(t) / Level(t)] + (1-γ) × Seasonal(t-m)\n\nForecast(t+h) = [Level(t) + h×Trend(t)] × Seasonal(t+h-m)\n\nWhere m = seasonal period (12 for monthly)',
            output: 'Seasonal indices repeat every m periods, scaling the trend.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Additive vs multiplicative seasonality.',
          table: {
            headers: ['Aspect', 'Additive', 'Multiplicative'],
            rows: [
              ['Formula', 'Y = Level + Trend + Seasonal', 'Y = (Level + Trend) × Seasonal'],
              ['Seasonal effect', 'Constant size', 'Proportional to level'],
              ['When to use', 'Stable amplitude', 'Amplitude grows with trend']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using the wrong seasonality type (fix: check if seasonal swings grow with the trend level)',
            'Mistake 2: Choosing the wrong seasonal period m (fix: inspect ACF or seasonal plot to confirm period)',
            'Mistake 3: Not re-initializing seasonal indices for new products (fix: use similar products or first full cycle)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Holt-Winters dominates business forecasting.',
          list: [
            'Retail: monthly sales with strong December peaks',
            'Tourism: weekly bookings with summer highs',
            'Transport: daily ridership with weekday vs weekend patterns'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Holt-Winters = level + trend + seasonality',
            'Three parameters: α, β, γ',
            'Choose additive or multiplicative based on seasonal amplitude',
            'Set m correctly (12 for monthly, 7 for daily, etc.)',
            'Often outperforms ARIMA for seasonal business data'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What are the three components of Holt-Winters?\nAns: Level, trend, and seasonal.',
            'Q2: How do you choose between additive and multiplicative seasonality?\nAns: Check if seasonal swings stay constant or grow with the trend level.',
            'Q3: What is m in Holt-Winters and what value for quarterly data?\nAns: Seasonal period; m = 4 for quarterly data.'
          ]
        }
      ]
    },
    evaluation: {
      title: 'Forecast Evaluation',
      subtitle: 'Measuring how good your predictions are',
      sections: [
        {
          heading: 'What is Forecast Evaluation?',
          text: 'You cannot improve what you do not measure. Forecast evaluation metrics quantify the gap between predicted and actual values.',
          list: [
            'MAE: easy to interpret, same units as data',
            'RMSE: penalizes large errors, good for optimization',
            'MAPE: percentage scale, useful for comparing across series',
            'Always compare against naive benchmark'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'RMSE is the square root of the average squared error.',
          example: {
            title: 'Example: MAE vs RMSE',
            code: 'Actual:    [100, 110, 105, 115]\nForecast:  [102, 108, 110, 112]\n\nErrors:    [-2, 2, -5, 3]\n\nMAE  = (| -2 | + | 2 | + | -5 | + | 3 |) / 4 = 3.0\nRMSE = √((4 + 4 + 25 + 9) / 4) = √(42/4) = 3.24\n\nRMSE > MAE because it\npenalizes the large -5 error.',
            output: 'RMSE punishes big mistakes more than MAE.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'MAE vs RMSE vs MAPE.',
          table: {
            headers: ['Aspect', 'MAE', 'RMSE', 'MAPE'],
            rows: [
              ['Penalty', 'Linear', 'Squared (heavy for large errors)', 'Percentage'],
              ['Units', 'Same as data', 'Same as data', 'Percentage'],
              ['Best for', 'Overall accuracy', 'Optimization, outliers matter', 'Comparing across scales']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Shuffling data for train-test split (fix: always split chronologically — past trains, future tests)',
            'Mistake 2: Using MAPE when actuals are near zero (fix: use sMAPE or MAE instead)',
            'Mistake 3: Evaluating on only one horizon (fix: report accuracy at multiple lead times)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Evaluation determines which model goes to production.',
          list: [
            'Retail: MAPE < 15% is often the target for demand forecasts',
            'Finance: RMSE used for risk model calibration',
            'Energy: MAE preferred for grid load balancing decisions'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'MAE = average absolute error; easy to explain',
            'RMSE = penalizes large errors; good for training',
            'MAPE = percentage; good for cross-series comparison',
            'Never shuffle time series for train-test split',
            'Always benchmark against naive forecast'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does RMSE exceed MAE when large errors exist?\nAns: Squaring magnifies large errors more than small ones.',
            'Q2: Why is chronological splitting mandatory for time series?\nAns: Future data must not leak into training; order matters.',
            'Q3: When is MAPE unreliable?\nAns: When actual values are near or equal to zero.'
          ]
        }
      ]
    }
  },
  module3: {
    stationarity: {
      title: 'Stationary Processes',
      subtitle: 'The quiet foundation of time series modeling',
      sections: [
        {
          heading: 'What is Stationarity?',
          text: 'A stationary series has stable statistical properties over time: constant mean, constant variance, and autocorrelation that depends only on lag, not on time.',
          list: [
            'Strict stationarity: all distribution properties are time-invariant',
            'Weak stationarity: mean and variance constant; autocovariance depends only on lag',
            'Random walk is non-stationary: mean drifts, variance grows',
            'Most models (AR, MA, ARMA) assume stationarity'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'A white noise process is the simplest stationary series.',
          example: {
            title: 'Example: White noise vs random walk',
            code: 'White noise (stationary):\n  ε(t) ~ N(0, σ²)\n  Mean = 0 always\n  Variance = σ² always\n\nRandom walk (non-stationary):\n  Y(t) = Y(t-1) + ε(t)\n  Mean drifts over time\n  Variance grows with t\n\nRandom walk is just\ncumulative white noise.',
            output: 'Cumulative non-stationary operations destroy stationarity.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Stationary vs non-stationary behavior.',
          table: {
            headers: ['Aspect', 'Stationary', 'Non-Stationary'],
            rows: [
              ['Mean', 'Constant', 'Changes over time'],
              ['Variance', 'Constant', 'Grows or changes'],
              ['Example', 'White noise, ARMA', 'Random walk, trending data'],
              ['Modeling', 'ARMA directly', 'Differencing first (ARIMA)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Fitting ARMA on non-stationary data (fix: difference until stationary, then model)',
            'Mistake 2: Confusing deterministic trend with stochastic trend (fix: test with ADF; deterministic trends can be removed by regression)',
            'Mistake 3: Assuming visual flatness means stationary (fix: always run ADF or KPSS test)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Stationarity determines model choice.',
          list: [
            'Interest rates: often non-stationary; model with ARIMA or cointegration',
            'Temperature: approximately stationary around a seasonal cycle',
            'Stock prices: usually non-stationary random walks'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Stationary = constant mean, variance, and lag-only autocorrelation',
            'Random walk is non-stationary (mean drifts, variance grows)',
            'Most models require stationarity',
            'Always test with ADF, not just visual inspection',
            'Difference non-stationary series before ARMA modeling'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is a random walk non-stationary?\nAns: Its mean drifts and variance increases over time.',
            'Q2: What are the three conditions for weak stationarity?\nAns: Constant mean, constant variance, autocovariance depends only on lag.',
            'Q3: Can you fit ARMA directly on stock prices?\nAns: No — prices are usually non-stationary; difference first.'
          ]
        }
      ]
    },
    'adf-test': {
      title: 'Dickey-Fuller Test',
      subtitle: 'A statistical check for stationarity',
      sections: [
        {
          heading: 'What is the ADF Test?',
          text: 'The Augmented Dickey-Fuller (ADF) test checks whether a unit root is present. If present, the series is non-stationary.',
          list: [
            'Null hypothesis: series has a unit root (non-stationary)',
            'Alternative hypothesis: series is stationary',
            'p-value < 0.05 → reject null → series is stationary',
            'Low statistical power near the borderline; use with visual inspection'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The ADF test statistic must be more negative than critical values to reject the null.',
          example: {
            title: 'Example: ADF test output',
            code: "from statsmodels.tsa.stattools import adfuller\n\nresult = adfuller(series)\nprint(f'ADF Statistic: {result[0]:.4f}')\nprint(f'p-value: {result[1]:.4f}')\n\n# Output:\n# ADF Statistic: -3.25\n# p-value: 0.018\n\n# p < 0.05 → Reject H0 → Stationary",
            output: 'Compare ADF statistic to critical values at 1%, 5%, and 10%.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'ADF vs KPSS test.',
          table: {
            headers: ['Aspect', 'ADF', 'KPSS'],
            rows: [
              ['Null hypothesis', 'Non-stationary (unit root)', 'Stationary'],
              ['Rejection means', 'Stationary', 'Non-stationary'],
              ['Best for', 'Confirming non-stationarity', 'Confirming stationarity'],
              ['Conflicts', 'ADF says stationary, KPSS says non-stationary → difference required']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Trusting ADF alone on small samples (fix: use KPSS as a confirmatory test)',
            'Mistake 2: Forgetting to set the right lag length (fix: use AIC-based lag selection)',
            'Mistake 3: Applying ADF to seasonal data without seasonal differencing (fix: remove seasonality first)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'ADF is the first test before model selection.',
          list: [
            'Economics: testing GDP stationarity before VAR modeling',
            'Finance: checking if stock returns (not prices) are stationary',
            'Operations: verifying demand stability before exponential smoothing'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'ADF tests for unit root → non-stationarity',
            'H0: non-stationary; reject if p < 0.05',
            'Use KPSS to confirm (opposite null hypothesis)',
            'Set lag length using AIC',
            'Small samples can give weak ADF results'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the null hypothesis of the ADF test?\nAns: The series has a unit root and is non-stationary.',
            'Q2: If ADF p-value = 0.12, what do you conclude?\nAns: Fail to reject H0 — series is likely non-stationary.',
            'Q3: Why use KPSS alongside ADF?\nAns: They have opposite null hypotheses; conflicting results indicate differencing is needed.'
          ]
        }
      ]
    },
    'lag-differencing': {
      title: 'Lag and Differencing',
      subtitle: 'Transforming non-stationary into stationary',
      sections: [
        {
          heading: 'What is Differencing?',
          text: 'Differencing computes the change between consecutive observations. It removes trends and often achieves stationarity.',
          list: [
            'First difference: y\'(t) = y(t) - y(t-1)',
            'Removes linear trends',
            'Seasonal difference: y(t) - y(t-m) removes repeating patterns',
            'Over-differencing can introduce unnecessary correlation'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'First-order differencing removes a linear trend.',
          example: {
            title: 'Example: First-order differencing',
            code: 'Original: [100, 105, 103, 108, 110, 115]\n\nFirst difference:\n  105 - 100 = 5\n  103 - 105 = -2\n  108 - 103 = 5\n  110 - 108 = 2\n  115 - 110 = 5\n\nDifferenced: [5, -2, 5, 2, 5]\n\nMean is now stable (~3),\nand the upward trend is gone.',
            output: 'Differencing focuses on changes, not absolute levels.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'First vs seasonal differencing.',
          table: {
            headers: ['Aspect', 'First Difference', 'Seasonal Difference'],
            rows: [
              ['Formula', 'Y(t) - Y(t-1)', 'Y(t) - Y(t-m)'],
              ['Removes', 'Linear trend', 'Seasonal pattern'],
              ['When to use', 'Trending data', 'Data with repeating cycles'],
              ['Example', 'Stock prices', 'Monthly sales with yearly seasonality']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Over-differencing (fix: stop when ADF confirms stationarity; second differences rarely needed)',
            'Mistake 2: Differencing without checking if deterministic trend exists (fix: try regression detrending first)',
            'Mistake 3: Forgetting to invert differences after forecasting (fix: cumulatively sum forecasts to get levels)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Differencing is the standard preprocessing step.',
          list: [
            'Finance: stock returns are first differences of log prices',
            'Economics: GDP growth rates are differences of GDP levels',
            'Retail: year-over-year sales change removes seasonality'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Differencing = compute changes between consecutive points',
            'First difference removes linear trend',
            'Seasonal difference removes repeating cycles',
            'Do not over-difference — test stationarity after each step',
            'Remember to integrate (cumsum) forecasts back to original scale'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What does first-order differencing remove?\nAns: A linear trend.',
            'Q2: If monthly data has yearly seasonality, what differencing should you apply?\nAns: Seasonal difference with m = 12.',
            'Q3: What is over-differencing and why avoid it?\nAns: Differencing more than needed; it can introduce artificial correlations.'
          ]
        }
      ]
    },
    arma: {
      title: 'ARMA(p,q) Processes',
      subtitle: 'The workhorse of stationary time series modeling',
      sections: [
        {
          heading: 'What is ARMA?',
          text: 'ARMA combines Autoregressive (AR) and Moving Average (MA) components to model stationary time series. It captures both persistence and short-term shocks.',
          list: [
            'AR(p): current value depends on past p values',
            'MA(q): current value depends on past q forecast errors',
            'ARMA(p,q): combines both',
            'Requires stationarity — difference first if needed'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'ARMA combines AR and MA equations into one.',
          example: {
            title: 'Example: ARMA(1,1)',
            code: 'AR(1):  y(t) = c + φ₁ × y(t-1) + ε(t)\nMA(1):  y(t) = μ + θ₁ × ε(t-1) + ε(t)\n\nARMA(1,1):\n  y(t) = c + φ₁ × y(t-1) + θ₁ × ε(t-1) + ε(t)\n\nExample with φ₁=0.7, θ₁=0.4:\n  y(t) = 0.7×y(t-1) + 0.4×ε(t-1) + ε(t)\n\nCaptures both persistence (AR)\nand shock effects (MA).',
            output: 'ARMA is flexible and widely used for stationary series.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'AR vs MA.',
          table: {
            headers: ['Aspect', 'AR(p)', 'MA(q)'],
            rows: [
              ['Depends on', 'Past values of the series', 'Past forecast errors (shocks)'],
              ['ACF pattern', 'Tails off gradually', 'Cuts off after lag q'],
              ['PACF pattern', 'Cuts off after lag p', 'Tails off gradually'],
              ['Use when', 'Series shows persistence', 'Series shows short-term shocks']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Fitting ARMA on non-stationary data (fix: difference until stationary, then fit ARMA)',
            'Mistake 2: Choosing p and q too high (fix: use AIC/BIC and inspect ACF/PACF)',
            'Mistake 3: Ignoring residual diagnostics (fix: residuals should be white noise; check ACF of residuals)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'ARMA models stationary processes across domains.',
          list: [
            'Finance: modeling stationary returns (not prices)',
            'Meteorology: temperature deviations from seasonal norm',
            'Industrial: vibration signals after detrending'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'ARMA = AR(p) + MA(q)',
            'AR uses past values; MA uses past errors',
            'ACF cuts off for MA; PACF cuts off for AR',
            'Data must be stationary before fitting',
            'Check residuals — they should be white noise'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What does the AR component capture?\nAns: Persistence — the influence of past values on the current value.',
            'Q2: What does the MA component capture?\nAns: Short-term shocks — the effect of past forecast errors.',
            'Q3: How do ACF and PACF help identify AR vs MA?\nAns: PACF cutoff suggests AR order; ACF cutoff suggests MA order.'
          ]
        }
      ]
    },
    'acf-pacf': {
      title: 'ACF and PACF',
      subtitle: 'Reading the fingerprints of your time series',
      sections: [
        {
          heading: 'What are ACF and PACF?',
          text: 'ACF measures total correlation at each lag. PACF measures the direct correlation at lag k after removing the effect of intermediate lags. Together they reveal the model structure.',
          list: [
            'ACF: correlation between y(t) and y(t-k)',
            'PACF: partial correlation, isolating the direct link',
            'AR(p): PACF cuts off after lag p; ACF tails off',
            'MA(q): ACF cuts off after lag q; PACF tails off'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The autocorrelation at lag k is the Pearson correlation of the series with its lagged self.',
          example: {
            title: 'Example: ACF for AR(1) with φ=0.7',
            code: 'ACF for AR(1):\n  Lag 1: 0.70\n  Lag 2: 0.49 (= 0.7²)\n  Lag 3: 0.34 (= 0.7³)\n  Lag 4: 0.24\n\nPattern: gradual exponential decay\n→ Indicates AR process\n\nACF for MA(1) with θ=0.6:\n  Lag 1: 0.44\n  Lag 2: 0.00\n  Lag 3: 0.00\n\nPattern: sharp cutoff after lag 1\n→ Indicates MA(1) process',
            output: 'ACF and PACF patterns are the key to identifying p and q.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'ACF vs PACF signatures.',
          table: {
            headers: ['Model', 'ACF Pattern', 'PACF Pattern'],
            rows: [
              ['AR(p)', 'Tails off gradually', 'Cuts off after lag p'],
              ['MA(q)', 'Cuts off after lag q', 'Tails off gradually'],
              ['ARMA(p,q)', 'Tails off', 'Tails off'],
              ['ARIMA', 'Slow decay (non-stationary)', 'Slow decay']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Interpreting ACF on non-stationary data (fix: difference first, then inspect ACF/PACF)',
            'Mistake 2: Reading significance incorrectly (fix: bars exceeding the confidence band are significant)',
            'Mistake 3: Forgetting that ARMA mixes both patterns (fix: when both tail off, try combined ARMA)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'ACF/PACF guides model selection.',
          list: [
            'Temperature: ACF decay suggests AR process (persistence)',
            'Sales shocks: ACF cutoff suggests MA process (short-term effects)',
            'Economic indicators: both tail off → ARMA needed'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'ACF = total correlation at lag k',
            'PACF = direct correlation removing intermediate lags',
            'PACF cutoff → AR order; ACF cutoff → MA order',
            'Always inspect on stationary data',
            'Both tailing off suggests ARMA'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: If PACF cuts off after lag 2, what model do you try first?\nAns: AR(2).',
            'Q2: If ACF cuts off after lag 1, what model do you try first?\nAns: MA(1).',
            'Q3: Why must ACF/PACF be checked on stationary data?\nAns: Non-stationary data shows slow decay that masks the true AR/MA structure.'
          ]
        }
      ]
    },
    estimation: {
      title: 'Parameter Estimation',
      subtitle: 'Fitting ARMA models to data',
      sections: [
        {
          heading: 'What is Parameter Estimation?',
          text: 'Parameter estimation finds the best coefficients for AR and MA terms. Two main methods exist: Yule-Walker (method of moments) and Maximum Likelihood Estimation (MLE).',
          list: [
            'Yule-Walker: fast, consistent, works well for pure AR',
            'MLE: more efficient, provides standard errors, general for ARMA',
            'Conditional least squares: approximate MLE, computationally lighter',
            'Optimization minimizes the sum of squared residuals'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Yule-Walker sets sample autocorrelations equal to theoretical ones.',
          example: {
            title: 'Example: Yule-Walker for AR(1)',
            code: 'Theoretical ACF for AR(1):\n  ρ(1) = φ₁\n\nSample ACF:\n  r(1) = 0.72\n\nYule-Walker estimate:\n  φ̂₁ = r(1) = 0.72\n\nFor AR(2), solve:\n  r(1) = φ₁ + φ₂ × r(1)\n  r(2) = φ₁ × r(1) + φ₂\n\nSimple but less efficient than MLE.',
            output: 'Yule-Walker is fast but MLE is preferred for mixed ARMA.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Yule-Walker vs MLE.',
          table: {
            headers: ['Aspect', 'Yule-Walker', 'MLE'],
            rows: [
              ['Method', 'Method of moments', 'Maximize likelihood'],
              ['Speed', 'Fast (closed form for AR)', 'Slower (iterative)'],
              ['Standard errors', 'Not directly available', 'Available'],
              ['Best for', 'Pure AR models', 'ARMA, complex models']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Ignoring coefficient significance (fix: check p-values; insignificant terms should be removed)',
            'Mistake 2: Overfitting with too many parameters (fix: use AIC/BIC to penalize complexity)',
            'Mistake 3: Using Yule-Walker for MA terms (fix: Yule-Walker only works for AR; use MLE for MA or ARMA)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Estimation turns theory into fitted models.',
          list: [
            'Econometrics: MLE for ARIMA on GDP and inflation',
            'Engineering: Yule-Walker for real-time AR filtering',
            'Finance: MLE for volatility models with ARMA errors'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Yule-Walker = match sample ACF to theoretical ACF',
            'MLE = maximize probability of observing the data',
            'MLE is more general and provides standard errors',
            'Check significance of each coefficient',
            'Use AIC/BIC to avoid overfitting'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the main advantage of MLE over Yule-Walker?\nAns: MLE works for MA and ARMA, and provides standard errors.',
            'Q2: Why might you still use Yule-Walker?\nAns: It is fast and has a closed-form solution for pure AR models.',
            'Q3: What should you do if a coefficient has p-value > 0.05?\nAns: Remove the term and refit a simpler model.'
          ]
        }
      ]
    }
  },
  module4: {
    arima: {
      title: 'ARIMA Models',
      subtitle: 'ARMA plus differencing for non-stationary data',
      sections: [
        {
          heading: 'What is ARIMA?',
          text: 'ARIMA extends ARMA by adding differencing (the "I" for Integrated). It models non-stationary series by first making them stationary through differencing.',
          list: [
            'p = AR order, d = differencing order, q = MA order',
            'd = 1 means first difference; d = 2 means second difference',
            'Most real series need d = 0 or d = 1',
            'ARIMA is the most widely used time series model in practice'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'ARIMA applies ARMA to the differenced series.',
          example: {
            title: 'Example: ARIMA(1,1,1)',
            code: 'Step 1: Difference once\n  y\'(t) = y(t) - y(t-1)\n\nStep 2: Fit ARMA(1,1) to y\'(t):\n  y\'(t) = c + φ₁ × y\'(t-1) + θ₁ × ε(t-1) + ε(t)\n\nStep 3: Forecast y\'(t+h), then\n  integrate (cumulatively sum)\n  to get forecasts for y(t+h)',
            output: 'Differencing makes the series stationary; ARMA models the changes.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'ARMA vs ARIMA.',
          table: {
            headers: ['Aspect', 'ARMA(p,q)', 'ARIMA(p,d,q)'],
            rows: [
              ['Stationarity', 'Required', 'Achieved via differencing'],
              ['Parameters', 'p, q', 'p, d, q'],
              ['Use case', 'Already stationary', 'Trending or non-stationary'],
              ['Example', 'Temperature deviations', 'Stock prices, GDP']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Setting d too high (fix: test stationarity after one difference; d > 2 is rare)',
            'Mistake 2: Forgetting to integrate forecasts back (fix: cumulatively sum differenced forecasts)',
            'Mistake 3: Using ARIMA on seasonal data without seasonal terms (fix: use SARIMA instead)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'ARIMA is the default choice for non-seasonal trending data.',
          list: [
            'Finance: ARIMA on stock returns and volatility',
            'Economics: GDP and unemployment rate modeling',
            'Operations: production volume with linear growth'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'ARIMA = ARMA + differencing',
            'd = number of differences needed for stationarity',
            'Typical values: d = 0 or 1; rarely 2',
            'Always integrate forecasts back to original scale',
            'For seasonal data, upgrade to SARIMA'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What does the "I" in ARIMA stand for?\nAns: Integrated — meaning differencing is applied.',
            'Q2: If a series needs one difference to be stationary, what is d?\nAns: d = 1.',
            'Q3: What is the danger of d = 2?\nAns: Over-differencing can introduce artificial patterns and unnecessary complexity.'
          ]
        }
      ]
    },
    aic: {
      title: 'AIC and Model Evaluation',
      subtitle: 'Balancing fit and complexity',
      sections: [
        {
          heading: 'What is AIC?',
          text: 'The Akaike Information Criterion balances goodness of fit with model complexity. It penalizes extra parameters that do not improve prediction enough.',
          list: [
            'AIC = 2k - 2ln(L) where k = parameters, L = likelihood',
            'Lower AIC = better model',
            'AICc adjusts for small sample sizes',
            'BIC penalizes complexity more heavily than AIC'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'AIC rewards fit but punishes unnecessary parameters.',
          example: {
            title: 'Example: Comparing ARIMA models',
            code: 'Model 1: ARIMA(1,1,1)\n  AIC = 512.3\n\nModel 2: ARIMA(2,1,1)\n  AIC = 508.7  ← BEST\n\nModel 3: ARIMA(2,1,2)\n  AIC = 510.1\n\nModel 2 wins because the extra\nAR parameter meaningfully\nimproves fit.',
            output: 'Choose the model with the lowest AIC.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'AIC vs AICc vs BIC.',
          table: {
            headers: ['Aspect', 'AIC', 'AICc', 'BIC'],
            rows: [
              ['Penalty', '2k', '2k + correction', 'k × ln(n)'],
              ['Small samples', 'Biased', 'Corrected', 'Very strict'],
              ['Best for', 'Prediction accuracy', 'Small samples', 'Parsimony, model selection']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Comparing AIC across different datasets (fix: AIC is only comparable on the same data)',
            'Mistake 2: Always picking the lowest AIC without checking residuals (fix: validate that residuals are white noise)',
            'Mistake 3: Using AIC on non-nested models without caution (fix: AIC is most reliable for nested comparisons)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Information criteria automate model selection.',
          list: [
            'Auto ARIMA: automatically searches p, d, q using AIC',
            'Econometrics: selecting lag length in VAR models',
            'Machine learning: regularization as a continuous form of complexity penalty'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'AIC = 2k - 2ln(L); lower is better',
            'Penalizes extra parameters to prevent overfitting',
            'AICc for small samples; BIC for parsimony',
            'Compare only on the same dataset',
            'Always check residuals after selecting by AIC'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does AIC penalize extra parameters?\nAns: To prevent overfitting — more parameters should improve fit enough to justify the cost.',
            'Q2: When should you use AICc instead of AIC?\nAns: When sample size is small relative to the number of parameters.',
            'Q3: What does BIC favor more than AIC?\nAns: Simpler models with fewer parameters.'
          ]
        }
      ]
    },
    sarima: {
      title: 'Seasonal ARIMA (SARIMA)',
      subtitle: 'ARIMA with repeating seasonal patterns',
      sections: [
        {
          heading: 'What is SARIMA?',
          text: 'SARIMA extends ARIMA by adding seasonal AR, MA, and differencing components. It handles both trend and seasonality simultaneously.',
          list: [
            'Non-seasonal: (p, d, q)',
            'Seasonal: (P, D, Q)m where m = seasonal period',
            'Monthly data: m = 12; quarterly: m = 4; daily: m = 7',
            'SARIMA is the standard for seasonal business forecasting'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'SARIMA has two sets of equations: one for regular lags, one for seasonal lags.',
          example: {
            title: 'Example: SARIMA(1,1,1)(1,1,1)12',
            code: 'Non-seasonal part (p,d,q) = (1,1,1):\n  Regular differencing and ARMA\n\nSeasonal part (P,D,Q) = (1,1,1):\n  Seasonal differencing at lag 12\n  Seasonal AR(1) at lag 12\n  Seasonal MA(1) at lag 12\n\nFor monthly sales with yearly\npatterns, this is a common\nstarting point.',
            output: 'Seasonal components operate at lags m, 2m, 3m, etc.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'ARIMA vs SARIMA.',
          table: {
            headers: ['Aspect', 'ARIMA', 'SARIMA'],
            rows: [
              ['Handles seasonality', 'No', 'Yes'],
              ['Parameters', 'p, d, q', 'p, d, q, P, D, Q, m'],
              ['Use case', 'Non-seasonal data', 'Monthly, quarterly, daily patterns'],
              ['Complexity', 'Lower', 'Higher']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Forgetting seasonal differencing (fix: if seasonality is strong, D = 1 is usually needed)',
            'Mistake 2: Setting m incorrectly (fix: verify period from seasonal plot or domain knowledge)',
            'Mistake 3: Over-parameterizing seasonal terms (fix: start with P ≤ 1, Q ≤ 1; expand only if needed)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'SARIMA dominates seasonal forecasting.',
          list: [
            'Retail: monthly sales with holiday peaks (m = 12)',
            'Transport: daily ridership with weekday patterns (m = 7)',
            'Agriculture: quarterly crop yields (m = 4)'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'SARIMA = ARIMA + seasonal components',
            'Two parameter sets: regular (p,d,q) and seasonal (P,D,Q)m',
            'm must match the actual seasonal period',
            'Seasonal differencing (D) often needed',
            'Start simple: P ≤ 1, Q ≤ 1'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What does m = 12 mean in SARIMA?\nAns: The seasonal period is 12 months.',
            'Q2: When should you use seasonal differencing (D = 1)?\nAns: When the seasonal pattern is strong and consistent over time.',
            'Q3: What is a common starting specification for monthly seasonal data?\nAns: SARIMA(1,1,1)(1,1,1)12.'
          ]
        }
      ]
    },
    'sarima-forecast': {
      title: 'Forecasting with SARIMA',
      subtitle: 'Generating predictions with confidence',
      sections: [
        {
          heading: 'What is SARIMA Forecasting?',
          text: 'Once a SARIMA model is fitted, forecasts are generated by extending the AR and seasonal components into the future. Uncertainty grows as the horizon increases.',
          list: [
            'Point forecasts use expected values of future errors (zero)',
            'Confidence intervals widen with the forecast horizon',
            'Seasonal forecasts repeat the estimated seasonal pattern',
            'Forecasts revert to the mean for stationary models'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Forecast uncertainty grows with the square root of the horizon.',
          example: {
            title: 'Example: SARIMA forecast with intervals',
            code: 'Fitted SARIMA on monthly sales.\n\nForecasts:\n  Month 1: 125,000 ± 8,500\n  Month 2: 132,000 ± 11,200\n  Month 3: 128,000 ± 13,800\n  Month 6: 138,000 ± 18,400\n\nThe confidence interval widens\nas we forecast further out.',
            output: 'Farther horizons have more uncertainty.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'In-sample vs out-of-sample evaluation.',
          table: {
            headers: ['Aspect', 'In-Sample', 'Out-of-Sample'],
            rows: [
              ['Data used', 'Training data', 'Holdout test data'],
              ['Optimism', 'Overly optimistic', 'Realistic accuracy'],
              ['Best for', 'Model diagnostics', 'True forecast assessment'],
              ['Risk', 'Overfitting', 'Better but fewer observations']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Reporting only point forecasts (fix: always include confidence intervals)',
            'Mistake 2: Evaluating only on in-sample fit (fix: use time-series cross-validation or holdout)',
            'Mistake 3: Ignoring that seasonal patterns may shift (fix: monitor forecast accuracy and retrain periodically)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'SARIMA forecasts drive planning.',
          list: [
            'Inventory: ordering stock before predicted seasonal peaks',
            'Staffing: hiring temporary workers before expected demand surges',
            'Budgeting: allocating marketing spend based on forecasted revenue cycles'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'SARIMA forecasts extend AR and seasonal patterns',
            'Uncertainty grows with horizon',
            'Always show confidence intervals',
            'Out-of-sample evaluation is essential',
            'Retrain models when patterns shift'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why do confidence intervals widen over time?\nAns: More things can change; uncertainty compounds.',
            'Q2: What is the difference between in-sample and out-of-sample evaluation?\nAns: In-sample uses training data; out-of-sample uses unseen future data.',
            'Q3: Why should you retrain SARIMA periodically?\nAns: Seasonal patterns and trends can shift over time.'
          ]
        }
      ]
    }
  },
  module5: {
    var: {
      title: 'Vector Autoregression (VAR)',
      subtitle: 'Modeling multiple interrelated time series',
      sections: [
        {
          heading: 'What is VAR?',
          text: 'VAR models multiple time series simultaneously. Each variable is a function of its own past and the past of all other variables in the system.',
          list: [
            'VAR(1) with k variables has k² AR coefficients',
            'Captures bidirectional relationships without specifying causality',
            'All variables must be stationary',
            'Granger causality tests can be run after fitting'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Each equation in a VAR includes lags of all variables.',
          example: {
            title: 'Example: VAR(1) with 2 variables',
            code: 'y₁(t) = c₁ + φ₁₁ × y₁(t-1) + φ₁₂ × y₂(t-1) + ε₁(t)\ny₂(t) = c₂ + φ₂₁ × y₁(t-1) + φ₂₂ × y₂(t-1) + ε₂(t)\n\nWhere:\n  φ₁₂ = effect of y₂ on y₁\n  φ₂₁ = effect of y₁ on y₂\n\nEach variable is influenced by\nALL variables in the system.',
            output: 'VAR captures feedback loops between variables.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Univariate ARIMA vs VAR.',
          table: {
            headers: ['Aspect', 'ARIMA', 'VAR'],
            rows: [
              ['Variables', 'One', 'Multiple'],
              ['Cross-effects', 'None (external regressors only)', 'Built-in'],
              ['Parameters', 'Few', 'Many (grows with k²)'],
              ['Causality', 'Not tested', 'Granger causality available']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Including too many variables (fix: keep k small; use information criteria to select variables)',
            'Mistake 2: Using non-stationary variables (fix: difference or test for cointegration first)',
            'Mistake 3: Interpreting coefficients as causal (fix: VAR shows predictive relationships, not true causation)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'VAR is standard in macroeconomics and finance.',
          list: [
            'Macroeconomics: modeling GDP, inflation, and interest rates together',
            'Finance: spillover effects between stock markets',
            'Energy: electricity demand, price, and temperature interdependencies'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'VAR = multiple AR models solved jointly',
            'Each variable uses lags of all variables',
            'Parameters grow quickly with k²',
            'All series must be stationary',
            'Granger causality tests predictive influence'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: How many AR coefficients does VAR(1) with 3 variables have?\nAns: 3² = 9 coefficients (3 per equation).',
            'Q2: What is a key requirement before fitting VAR?\nAns: All series must be stationary.',
            'Q3: Does VAR prove causality?\nAns: No — it shows predictive (Granger) causality, not true causal relationships.'
          ]
        }
      ]
    },
    'var-forecast': {
      title: 'VAR Forecasting',
      subtitle: 'Predicting all variables at once',
      sections: [
        {
          heading: 'What is VAR Forecasting?',
          text: 'VAR generates forecasts for all variables simultaneously. Because variables influence each other, a shock in one series propagates through the system.',
          list: [
            'One-step forecasts use known lags',
            'Multi-step forecasts use previously forecasted values',
            'Forecast error covariance shows joint uncertainty',
            'Impulse response functions trace how shocks spread'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'VAR forecasts all variables jointly using their interdependencies.',
          example: {
            title: 'Example: VAR forecast spillover',
            code: 'Variables: GDP growth, Inflation, Interest rate\n\nVAR(2) fitted.\n\nForecast next quarter:\n  GDP: 2.5% (was 2.3%)\n  Inflation: 3.2% (was 3.5%)\n  Interest: 4.0% (was 4.2%)\n\nBecause inflation fell,\ninterest rate also falls\ndue to cross-variable\nrelationships.',
            output: 'VAR captures spillover effects between variables.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'One-step vs multi-step VAR forecasts.',
          table: {
            headers: ['Aspect', 'One-Step', 'Multi-Step'],
            rows: [
              ['Input lags', 'Actual observed values', 'Previously forecasted values'],
              ['Accuracy', 'Higher', 'Lower (error accumulation)'],
              ['Use case', 'Nowcasting', 'Medium-term planning'],
              ['Uncertainty', 'Lower', 'Higher']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Forecasting too far ahead (fix: VAR accuracy drops quickly; limit to a few steps)',
            'Mistake 2: Not using impulse responses to interpret results (fix: IRFs show how a shock in one variable affects all others)',
            'Mistake 3: Ignoring forecast uncertainty (fix: report confidence intervals, not just point forecasts)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'VAR forecasting supports policy and strategy.',
          list: [
            'Central banks: forecasting inflation and GDP jointly for rate decisions',
            'Portfolio management: predicting returns across correlated asset classes',
            'Supply chain: modeling demand, inventory, and lead times together'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'VAR forecasts all variables simultaneously',
            'Shocks propagate through the system',
            'One-step uses actual lags; multi-step uses forecasts',
            'Impulse responses interpret cross-variable effects',
            'Limit forecast horizon for reliable results'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does multi-step VAR accuracy drop?\nAns: Errors accumulate as forecasted values feed into future forecasts.',
            'Q2: What do impulse response functions show?\nAns: How a shock to one variable propagates to others over time.',
            'Q3: When is VAR most valuable for forecasting?\nAns: When variables are interrelated and influence each other.'
          ]
        }
      ]
    },
    varma: {
      title: 'VARMA Model',
      subtitle: 'Adding moving average to multivariate models',
      sections: [
        {
          heading: 'What is VARMA?',
          text: 'VARMA extends VAR by adding moving average components, just as ARMA extends AR. It captures both persistence and shock effects across multiple variables.',
          list: [
            'VARMA(p,q) has AR matrices Φ₁...Φₚ and MA matrices Θ₁...Θᵩ',
            'More flexible than VAR but harder to estimate',
            'Identifiability issues can arise (multiple parameter sets fit equally well)',
            'MLE is the standard estimation method'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'VARMA includes both AR and MA matrix coefficients.',
          example: {
            title: 'Example: VARMA(1,1)',
            code: 'y(t) = c + Φ₁ × y(t-1) + Θ₁ × ε(t-1) + ε(t)\n\nWhere:\n  Φ₁ = k×k AR coefficient matrix\n  Θ₁ = k×k MA coefficient matrix\n  ε(t) = k-dimensional white noise\n\nMore flexible than VAR,\nbut estimation is harder\nand may not be unique.',
            output: 'VARMA captures both persistence and cross-variable shocks.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'VAR vs VARMA.',
          table: {
            headers: ['Aspect', 'VAR', 'VARMA'],
            rows: [
              ['Parameters', 'Fewer', 'More'],
              ['Identifiability', 'Always identifiable', 'Can fail'],
              ['Estimation', 'OLS or MLE', 'MLE only'],
              ['When to use', 'Most cases', 'When shocks matter across variables']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using VARMA when VAR suffices (fix: start with VAR; add MA only if residuals show MA structure)',
            'Mistake 2: Ignoring identifiability warnings (fix: simplify the model or impose constraints)',
            'Mistake 3: Over-parameterizing with large k (fix: keep the system small; VARMA parameters grow very fast)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'VARMA is used when shock dynamics matter.',
          list: [
            'Finance: modeling volatility spillovers with MA components',
            'Economics: capturing policy shock transmission',
            'Engineering: multivariate control systems with disturbance dynamics'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'VARMA = VAR + MA matrices',
            'More flexible but harder to estimate',
            'Identifiability can be an issue',
            'Start with VAR; add MA if needed',
            'Parameters grow very fast with k'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What does VARMA add that VAR lacks?\nAns: Moving average components that capture shock effects.',
            'Q2: What is an identifiability problem in VARMA?\nAns: Multiple parameter combinations can fit the data equally well.',
            'Q3: When should you prefer VAR over VARMA?\nAns: When the simpler VAR captures the dynamics well enough.'
          ]
        }
      ]
    },
    mar: {
      title: 'Multivariate AR Processes',
      subtitle: 'Generalizing AR to multiple series',
      sections: [
        {
          heading: 'What is Multivariate AR?',
          text: 'Multivariate AR (MAR) is a generalization of univariate AR where each variable depends on lagged values of all variables in the system. It is essentially VAR viewed from an AR perspective.',
          list: [
            'MAR(p) = VAR(p) — the terms are interchangeable',
            'Each Φ matrix shows how variable j at lag l affects variable i',
            'Stationarity requires eigenvalues of the companion matrix to be < 1',
            'MAR is useful for understanding lag structures in multivariate data'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'MAR extends AR to vector form with coefficient matrices.',
          example: {
            title: 'Example: MAR(2) with 3 variables',
            code: 'y(t) = c + Φ₁ × y(t-1) + Φ₂ × y(t-2) + ε(t)\n\nFor 3 variables:\n  Φ₁ is 3×3 (9 parameters)\n  Φ₂ is 3×3 (9 parameters)\n  Total: 18 AR parameters + 3 constants\n\nStationarity condition:\n  Eigenvalues of companion\n  matrix must be < 1',
            output: 'MAR generalizes univariate AR to multiple interrelated series.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Univariate AR vs Multivariate AR.',
          table: {
            headers: ['Aspect', 'Univariate AR(p)', 'Multivariate AR(p)'],
            rows: [
              ['Coefficients', 'Scalar φ₁...φₚ', 'Matrix Φ₁...Φₚ'],
              ['Parameters', 'p', 'p × k²'],
              ['Cross-effects', 'None', 'Built-in'],
              ['Stationarity', '|roots| > 1', 'Eigenvalues < 1']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Fitting high-order MAR without enough data (fix: parameters grow as p×k²; ensure n >> p×k²)',
            'Mistake 2: Ignoring stationarity checks (fix: compute companion matrix eigenvalues before forecasting)',
            'Mistake 3: Confusing MAR with separate univariate ARs (fix: MAR includes cross-series effects; separate ARs do not)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'MAR models interrelated dynamic systems.',
          list: [
            'Climate: temperature, precipitation, and pressure as a coupled system',
            'Health: tracking multiple vital signs and their lagged interactions',
            'Marketing: modeling advertising spend, sales, and competitor activity'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'MAR = VAR = multivariate AR',
            'Coefficient matrices capture cross-variable effects',
            'Stationarity: companion matrix eigenvalues < 1',
            'Parameters grow rapidly with k²',
            'Need lots of data relative to parameters'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: How many parameters does MAR(2) with 3 variables have?\nAns: 2 × 3² = 18 AR parameters plus 3 constants = 21.',
            'Q2: What is the stationarity condition for MAR?\nAns: Eigenvalues of the companion matrix must be less than 1 in magnitude.',
            'Q3: How is MAR different from running separate AR models?\nAns: MAR includes cross-series lag effects; separate ARs do not.'
          ]
        }
      ]
    },
    'deep-tsf': {
      title: 'Deep Learning for Time Series Forecasting',
      subtitle: 'Neural networks for temporal prediction',
      sections: [
        {
          heading: 'What is Deep Learning for TSF?',
          text: 'Deep learning models capture complex, non-linear temporal patterns that traditional methods miss. They shine on large datasets with many correlated series.',
          list: [
            'LSTM/GRU: capture long-range dependencies in sequences',
            '1D CNN: detect local temporal patterns efficiently',
            'Transformers: attention over all time steps for very long sequences',
            'DeepAR: probabilistic forecasts with neural networks'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'LSTM forecasts by learning a mapping from recent history to future values.',
          example: {
            title: 'Example: LSTM forecasting architecture',
            code: 'Input: [x(t-10), ..., x(t-1)] → 10 time steps\n\n[LSTM(64)]\n[LSTM(32)]\n[Dense(16)]\n[Dense(1)] → y(t)\n\nLoss: MSE\nOptimizer: Adam\n\nCan predict multiple steps\nahead by feeding predictions\nback as input.',
            output: 'LSTM learns non-linear temporal mappings from raw sequences.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Statistical vs deep learning approaches.',
          table: {
            headers: ['Aspect', 'ARIMA/SARIMA', 'Deep Learning'],
            rows: [
              ['Data size', 'Small to moderate', 'Large preferred'],
              ['Interpretability', 'High', 'Low (black box)'],
              ['Non-linearity', 'Limited', 'Excellent'],
              ['Training time', 'Fast', 'Slow'],
              ['Seasonality', 'Explicit', 'Learned implicitly'],
              ['Multivariate', 'VAR, VARMA', 'Natural and scalable']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using deep learning on small datasets (fix: ARIMA often wins with < 1000 observations)',
            'Mistake 2: Not scaling/normalizing inputs (fix: standardize or normalize time series before neural networks)',
            'Mistake 3: Ignoring seasonality in deep models (fix: add seasonal features or use specialized architectures like N-BEATS)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Deep learning dominates large-scale forecasting.',
          list: [
            'Cloud computing: AWS forecasts millions of server metrics with DeepAR',
            'Retail: Walmart uses deep models for item-level demand across stores',
            'Energy: grid operators use LSTMs for renewable energy prediction'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'LSTM/GRU: long-range sequential dependencies',
            '1D CNN: local pattern detection',
            'Transformers: attention for very long sequences',
            'Deep learning needs large data to outperform ARIMA',
            'Always normalize inputs and consider seasonality explicitly'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: When should you prefer deep learning over ARIMA?\nAns: With large datasets and complex non-linear patterns.',
            'Q2: What is a key preprocessing step for neural time series models?\nAns: Normalization or standardization of input values.',
            'Q3: Name three deep learning architectures for time series.\nAns: LSTM, 1D CNN, Transformer (also N-BEATS, DeepAR).'
          ]
        }
      ]
    }
  }
}
