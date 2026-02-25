export interface GuideSection {
    title: string;
    points: {
        subtitle: string;
        content: string;
    }[];
}

export interface GuideContent {
    title: string;
    readTime: string;
    executiveSummary: string;
    sections: GuideSection[];
}

export const guidesData: Record<string, GuideContent> = {
    'understanding-new-tax-regime-slabs': {
        title: 'Understanding the New Tax Regime Slabs for FY 2024-25',
        readTime: '5 Min Read',
        executiveSummary: 'The new income tax regime has been established as the default tax structure in India for FY 2024-25 (AY 2025-26). With an increased standard deduction and restructured slab rates, the new regime aims to simplify taxation by removing numerous exemptions in favor of lower flat rates.',
        sections: [
            {
                title: 'Key Structural Updates for 2024-25',
                points: [
                    {
                        subtitle: 'The Default Choice',
                        content: 'The new regime is now the default option when filing returns. Taxpayers wishing to stick with the old regime (with deductions like 80C) must explicitly opt out.'
                    },
                    {
                        subtitle: 'Increased Standard Deduction',
                        content: 'For salaried individuals, the standard deduction under the new tax regime was increased from ₹50,000 to ₹75,000.'
                    },
                    {
                        subtitle: 'Zero Tax Up To ₹7 Lakh',
                        content: 'A tax rebate under Section 87A of up to ₹25,000 remains applicable. This means individuals with a net taxable income of up to ₹7 lakh will not have to pay any income tax under the new regime.'
                    }
                ]
            },
            {
                title: 'Revised Income Tax Slab Rates',
                points: [
                    {
                        subtitle: 'Up to ₹3,00,000',
                        content: 'Tax Rate: Nil. Income up to this threshold is completely tax-free.'
                    },
                    {
                        subtitle: '₹3,00,001 to ₹7,00,000',
                        content: 'Tax Rate: 5%. However, thanks to the Section 87A rebate, if total income is under 7 lakh, the effective tax is zero.'
                    },
                    {
                        subtitle: '₹7,00,001 to ₹10,00,000',
                        content: 'Tax Rate: 10%. Applied only on the portion of income within this bracket.'
                    },
                    {
                        subtitle: '₹10,00,001 to ₹12,00,000',
                        content: 'Tax Rate: 15%. Applied only on the portion of income within this bracket.'
                    },
                    {
                        subtitle: '₹12,00,001 to ₹15,00,000',
                        content: 'Tax Rate: 20%. Applied only on the portion of income within this bracket.'
                    },
                    {
                        subtitle: 'Above ₹15,00,000',
                        content: 'Tax Rate: 30%. The maximum marginal slab rate.'
                    },
                    {
                        subtitle: 'Cess',
                        content: 'A 4% Health and Education Cess is appended to the calculated income tax amount across all brackets.'
                    }
                ]
            }
        ]
    },
    'when-is-gst-registration-mandatory': {
        title: 'When is GST Registration Mandatory?',
        readTime: '6 Min Read',
        executiveSummary: 'In India, navigating GST registration thresholds is critical for maintaining compliance. While thresholds generally provide a buffer for small businesses, specific transactions like inter-state sales or e-commerce can trigger mandatory registration regardless of your turnover.',
        sections: [
            {
                title: 'Turnover Threshold Triggers',
                points: [
                    {
                        subtitle: 'For Businesses Supplying Goods',
                        content: 'The general threshold limit is an annual aggregate turnover of ₹40 lakh. However, for businesses in certain special category states (like Arunachal Pradesh, Meghalaya, Sikkim), the limit drops to ₹20 lakh or даже ₹10 lakh.'
                    },
                    {
                        subtitle: 'For Businesses Supplying Services',
                        content: 'The general threshold limit is an annual aggregate turnover of ₹20 lakh. For special category states, this limit is reduced to ₹10 lakh.'
                    },
                    {
                        subtitle: 'What constitutes "Aggregate Turnover"?',
                        content: 'Aggregate turnover calculates your all-India PAN-based value of taxable supplies, exempt supplies, exports, and inter-state supplies. It is not just your profit, but your gross revenue.'
                    }
                ]
            },
            {
                title: 'Exceptions: Mandatory Registration Irrespective of Turnover',
                points: [
                    {
                        subtitle: 'Inter-State Supply',
                        content: 'If you supply goods across state borders, you generally require GST registration immediately, even if your turnover is zero. Certain exemptions exist for service providers.'
                    },
                    {
                        subtitle: 'E-commerce Sellers',
                        content: 'Individuals supplying goods or services through e-commerce platforms (like Amazon or Flipkart) must register for GST irrespective of their turnover limits.'
                    },
                    {
                        subtitle: 'Reverse Charge Mechanism (RCM)',
                        content: 'Persons required to pay tax under the reverse charge mechanism (such as receiving certain goods transport agency services) must register.'
                    },
                    {
                        subtitle: 'Non-Resident & Casual Taxable Persons',
                        content: 'Individuals occasionally supplying goods or services where they lack a fixed place of business or foreign entities operating within India must maintain compulsory registration.'
                    }
                ]
            }
        ]
    },
    'sole-proprietorship-vs-private-limited': {
        title: 'Sole Proprietorship vs. Private Limited',
        readTime: '8 Min Read',
        executiveSummary: 'Choosing the right structural foundation for a new business impacts personal risk, tax liabilities, and growth potential. This pragmatic comparison outlines why ambitious founders often pivot from a Proprietorship to a Private Limited Company.',
        sections: [
            {
                title: 'Liability & Risk Management',
                points: [
                    {
                        subtitle: 'Sole Proprietorship: Unlimited Personal Risk',
                        content: 'Legally, there is no distinction between the owner and the business. If the business defaults on debts or faces a lawsuit, the proprietor’s personal assets (home, savings) are on the line.'
                    },
                    {
                        subtitle: 'Private Limited: Limited Liability Protection',
                        content: 'A Pvt Ltd is a separate legal entity. A shareholder’s liability is strictly limited to the unpaid capital on their shares, creating a protective firewall around their personal wealth.'
                    }
                ]
            },
            {
                title: 'Compliance & Operating Discipline',
                points: [
                    {
                        subtitle: 'Sole Proprietorship: Minimalist Operations',
                        content: 'Compliance is negligible—limited simply to filing personal income tax returns, acquiring local trade licenses, and maintaining basic GST filings if thresholds are met. There is no requirement for mandatory audits until turnover exceeds specific high brackets.'
                    },
                    {
                        subtitle: 'Private Limited: Heavy Regulatory Oversight',
                        content: 'Requires formal incorporation via the Ministry of Corporate Affairs (MCA). Mandatory obligations include statutory audits, holding board meetings, filing annual returns (AOC-4, MGT-7), and maintaining structured accounting records.'
                    }
                ]
            },
            {
                title: 'Growth & Investor Readiness',
                points: [
                    {
                        subtitle: 'Proprietorships Cannot Raise Venture Capital',
                        content: 'Since ownership is entirely tied to an individual, offering equity shares to angel investors or VCs is impossible. Funding is usually restricted to personal savings, family loans, or high-interest unsecured business loans.'
                    },
                    {
                        subtitle: 'Private Limiteds are Scalable & Investable',
                        content: 'The corporate structure allows for the issuance of shares, ESOP pooling for employees, and straightforward board governance—making it the mandatory structure for any venture seeking institutional capital and scalability.'
                    }
                ]
            }
        ]
    },
    'why-profit-does-not-equal-cash-flow': {
        title: 'Why Profit Does Not Equal Cash Flow',
        readTime: '7 Min Read',
        executiveSummary: 'A business can record record-breaking profits while simultaneously going bankrupt. Understanding the critical disconnect between accounting profit and liquid cash flow is vital for operational survival and financial interpretation.',
        sections: [
            {
                title: 'The Great Illusion: Profit on Paper',
                points: [
                    {
                        subtitle: 'Accrual Accounting is to Blame',
                        content: 'Under accrual accounting—the standard for growing businesses—revenue is recognized when a sale is made, not when the cash is deposited. You can invoice a client for $100,000, log it as profit today, but not receive the cash for 90 days.'
                    },
                    {
                        subtitle: 'The Timing Trap (Accounts Receivable)',
                        content: 'Your P&L statement shows health, but if your customers delay payments (high Accounts Receivable), your bank account will dry up, rendering you unable to cover payroll or vendor payments.'
                    }
                ]
            },
            {
                title: 'Expenses That Escape the P&L',
                points: [
                    {
                        subtitle: 'Capital Expenditures (CapEx)',
                        content: 'Buying a $50,000 piece of machinery drains your bank account instantly. However, on the Profit & Loss statement, this cost is spread out over years as "Depreciation." Cash flow drops immediately; profit is barely dented.'
                    },
                    {
                        subtitle: 'Loan Principal Repayments',
                        content: 'When you repay a business loan, only the interest portion appears as an expense on your P&L. The actual principal repayment eats away at your cash reserves, invisible to your profit margins.'
                    },
                    {
                        subtitle: 'Inventory Accumulation',
                        content: 'Cash spent locking up stock in a warehouse is gone from your bank. However, the cost of that inventory only hits the P&L as an expense (Cost of Goods Sold) once the item is actually sold. Until then, your cash is bleeding while your profit remains pristine.'
                    }
                ]
            },
            {
                title: 'Strategic Takeaway',
                points: [
                    {
                        subtitle: 'Survival Requires Liquidity, Not Just Margin',
                        content: 'Frequent monitoring of your Cash Flow Statement—tracking Operating, Investing, and Financing cash flows—is the only way to ensure the business has the literal lifeblood needed to stay open tomorrow.'
                    }
                ]
            }
        ]
    },
    'preparing-cap-table-seed-funding': {
        title: 'Preparing Your Cap Table for Seed Funding',
        readTime: '10 Min Read',
        executiveSummary: 'A clean capitalization table is a prerequisite for seed funding. Institutional investors meticulously review cap tables to assess founder dilution, ESOP sizing, and potential governance red flags before issuing a term sheet.',
        sections: [
            {
                title: 'Anatomy of a Seed-Ready Cap Table',
                points: [
                    {
                        subtitle: 'Complete Stakeholder Visibility',
                        content: 'Your cap table must accurately detail every share of common stock, preferred stock, outstanding options, and convertible instruments (like SAFEs or convertible notes) held by founders, early angels, and advisors.'
                    },
                    {
                        subtitle: 'The Fully Diluted View',
                        content: 'Investors only care about the fully diluted cap table. This view calculates ownership percentages as if every single outstanding option and convertible note has already been converted into shares. It represents the true dilution reality.'
                    }
                ]
            },
            {
                title: 'Strategizing the ESOP Pool',
                points: [
                    {
                        subtitle: 'The Pre-Money Top-Up Requirement',
                        content: 'When investors put in money, they typically mandate an ESOP (Employee Stock Option Plan) pool of 10% to 15% to be created prior to their funding round (the "Pre-Money Top-Up"). This ensures that the founders absorb the dilution of future employee grants, not the new investors.'
                    },
                    {
                        subtitle: 'Sizing it Right',
                        content: 'Creating an unnecessarily large ESOP pool dilutes founders heavily. Analyze your hiring plan for the next 18-24 months and size the pool exclusively for the talent you actually intend to recruit before the next funding round.'
                    }
                ]
            },
            {
                title: 'Common Red Flags for Investors',
                points: [
                    {
                        subtitle: 'Dead Equity',
                        content: 'Significant equity held by early co-founders who are no longer active in the business is a massive deterrent. Investors want the equity concentrated in the hands of the individuals driving current growth.'
                    },
                    {
                        subtitle: 'Uncapped SAFEs or Notes',
                        content: 'Previous fundraising mechanisms without valuation caps can lead to hyper-dilution for founders when the priced seed round occurs, drastically skewing the cap table dynamics.'
                    }
                ]
            }
        ]
    },
    'capital-gains-tax-equities-mutual-funds': {
        title: 'Capital Gains Tax on Equities and Mutual Funds',
        readTime: '6 Min Read',
        executiveSummary: 'The Union Budget 2024 introduced a severe overhaul of the Capital Gains Tax regime for equities and mutual funds. With changes effective from July 2024, short-term and long-term capital gains rates have been hiked, impacting net returns for retail investors.',
        sections: [
            {
                title: 'Significant Tax Rate Adjustments',
                points: [
                    {
                        subtitle: 'Short-Term Capital Gains (STCG) Hike',
                        content: 'The tax rate on short-term capital gains resulting from the sale of listed equity shares and equity-oriented mutual funds (held for less than 12 months) has been increased aggressively from 15% to 20%.'
                    },
                    {
                        subtitle: 'Long-Term Capital Gains (LTCG) Policy Shift',
                        content: 'The tax rate for long-term capital gains on listed equity shares, previously sitting comfortably at 10%, has been raised to a uniform 12.5%.'
                    }
                ]
            },
            {
                title: 'Exemptions & Indexation Withdrawals',
                points: [
                    {
                        subtitle: 'LTCG Exemption Limit Tweaked',
                        content: 'Providing slight mitigation, the annual exemption limit for long-term capital gains on listed equity and equity-oriented mutual funds was marginally increased from ₹1 lakh to ₹1.25 lakh. Gains up to this new limit remain tax-free.'
                    },
                    {
                        subtitle: 'The Death of Indexation',
                        content: 'The benefit of indexation, which previously allowed taxpayers to adjust the acquisition cost of long-term assets for inflation to artificially lower their tax burden, has been overwhelmingly withdrawn for almost all asset classes, further increasing the real tax impact.'
                    }
                ]
            },
            {
                title: 'Holding Period Standardizations',
                points: [
                    {
                        subtitle: 'Listed Securities',
                        content: 'For assets such as listed stocks and equity ETFs, the holding period required for them to be categorized as "long-term" assets remains strictly at 12 months.'
                    },
                    {
                        subtitle: 'Debt and Hybrid Reclassifications',
                        content: 'Debt mutual fund units purchased after April 2023 are now taxed entirely at the investor\'s individual income tax slab rate. They no longer qualify for long-term capital gains concessions, regardless of the holding duration.'
                    }
                ]
            }
        ]
    },
    'income-tax-filing': {
        title: 'Complete Beginner\'s Guide to Income Tax Filing',
        readTime: '18–20 Min Read',
        executiveSummary: 'A step-by-step explanation of how income tax works — ideal for first-time filers and individuals seeking clarity beyond basic form submission. This guide covers why tax understanding matters, how slabs work, regime comparison, deductions, documents, filing flow, common mistakes, and post-filing steps.',
        sections: [
            {
                title: 'Why Tax Understanding Matters',
                points: [
                    {
                        subtitle: 'Compliance is mandatory, clarity is optional — but valuable',
                        content: 'Filing your return fulfills a legal obligation, but understanding the logic helps you plan income, deductions, and tax outflow better.'
                    },
                    {
                        subtitle: 'Mistakes create long-term complications',
                        content: 'Incorrect reporting can lead to notices, delayed refunds, or revision filings. Basic awareness prevents avoidable issues.'
                    }
                ]
            },
            {
                title: 'How Income Tax Slabs Work',
                points: [
                    {
                        subtitle: 'India follows a progressive tax system',
                        content: 'Higher income portions are taxed at higher slab rates. Your entire income is not taxed at the highest rate — only the portion exceeding each slab limit.'
                    },
                    {
                        subtitle: 'Taxable income differs from gross income',
                        content: 'Gross income is your total earnings. Taxable income is what remains after eligible deductions and exemptions.'
                    }
                ]
            },
            {
                title: 'Old vs New Tax Regime',
                points: [
                    {
                        subtitle: 'Old regime allows deductions and exemptions',
                        content: 'Suitable if you invest significantly under sections like 80C or claim housing loan and HRA benefits.'
                    },
                    {
                        subtitle: 'New regime offers lower slab rates but fewer deductions',
                        content: 'Works better for individuals without major deductions or complex tax structures.'
                    }
                ]
            },
            {
                title: 'Common Deductions Overview',
                points: [
                    {
                        subtitle: 'Section 80C investments',
                        content: 'Includes EPF, PPF, ELSS, life insurance premium, etc., up to prescribed limits.'
                    },
                    {
                        subtitle: 'Health insurance (80D)',
                        content: 'Premiums paid for self and family qualify within defined limits.'
                    },
                    {
                        subtitle: 'Housing loan interest',
                        content: 'Interest on home loans can be claimed under specific sections subject to caps.'
                    }
                ]
            },
            {
                title: 'Documents Required Before Filing',
                points: [
                    {
                        subtitle: 'Form 16 / Salary details',
                        content: 'Provides employer-reported income and TDS deducted.'
                    },
                    {
                        subtitle: 'AIS / TIS review',
                        content: 'Ensures all income sources reported to the tax department are verified.'
                    },
                    {
                        subtitle: 'Bank & investment statements',
                        content: 'Helps confirm interest income, capital gains, and other taxable receipts.'
                    }
                ]
            },
            {
                title: 'Step-by-Step Filing Flow',
                points: [
                    {
                        subtitle: 'Review pre-filled data carefully',
                        content: 'The portal auto-populates data, but cross-verification is essential.'
                    },
                    {
                        subtitle: 'Confirm tax computation before submission',
                        content: 'Check total income, deductions, and final liability/refund before filing.'
                    },
                    {
                        subtitle: 'Complete verification',
                        content: 'ITR is valid only after e-verification through Aadhaar OTP, bank validation, or other methods.'
                    }
                ]
            },
            {
                title: 'Common Filing Mistakes',
                points: [
                    {
                        subtitle: 'Ignoring AIS mismatches',
                        content: 'Unreported interest or gains can trigger automated notices.'
                    },
                    {
                        subtitle: 'Selecting incorrect tax regime',
                        content: 'Once filed, correction may require revised return within deadline.'
                    },
                    {
                        subtitle: 'Skipping capital gains reporting',
                        content: 'Even small transactions must be disclosed accurately.'
                    }
                ]
            },
            {
                title: 'After Filing — What Next?',
                points: [
                    {
                        subtitle: 'ITR processing and refund timeline',
                        content: 'Returns are processed electronically; refunds follow post-verification.'
                    },
                    {
                        subtitle: 'Maintain documentation',
                        content: 'Keep filed return and supporting records for future reference or scrutiny.'
                    }
                ]
            }
        ]
    },
    'startup-structuring': {
        title: 'Startup Structuring Blueprint',
        readTime: '22–25 Min Read',
        executiveSummary: 'Before scaling or raising capital, structural clarity is essential. This blueprint outlines how entity choice, tax positioning, and compliance discipline influence long-term growth. It covers why structure impacts growth, entity comparison, founder compensation, compliance cost mapping, pre-fundraising structuring, and governance readiness.',
        sections: [
            {
                title: 'Why Structure Impacts Growth',
                points: [
                    {
                        subtitle: 'Entity choice affects taxation and compliance load',
                        content: 'Different structures carry different tax rates, reporting requirements, and regulatory obligations that directly impact operational cost.'
                    },
                    {
                        subtitle: 'Investors evaluate structural discipline',
                        content: 'Clean documentation, proper incorporation, and governance readiness influence funding conversations and due diligence outcomes.'
                    }
                ]
            },
            {
                title: 'Entity Comparison Framework',
                points: [
                    {
                        subtitle: 'Proprietorship — Simple but limited scalability',
                        content: 'Easy to start with minimal compliance, but lacks separate legal identity and is not ideal for equity funding.'
                    },
                    {
                        subtitle: 'LLP — Balanced flexibility with moderate compliance',
                        content: 'Provides limited liability and structured operations, suitable for partnerships but less preferred for venture funding.'
                    },
                    {
                        subtitle: 'Private Limited — Structured and scalable',
                        content: 'Higher compliance responsibility, but better suited for raising capital, ESOP issuance, and long-term growth planning.'
                    }
                ]
            },
            {
                title: 'Founder Compensation Logic',
                points: [
                    {
                        subtitle: 'Salary provides predictable taxation',
                        content: 'Fixed salary ensures structured income reporting and steady tax treatment under individual slabs.'
                    },
                    {
                        subtitle: 'Dividend impacts tax differently',
                        content: 'Dividends are taxed in the hands of shareholders and must align with profitability and distribution planning.'
                    }
                ]
            },
            {
                title: 'Compliance Cost Mapping',
                points: [
                    {
                        subtitle: 'ROC and statutory filings',
                        content: 'Private entities require annual filings, board documentation, and financial statement disclosures.'
                    },
                    {
                        subtitle: 'Audit triggers and thresholds',
                        content: 'Certain turnover levels mandate audits, increasing reporting discipline and cost.'
                    },
                    {
                        subtitle: 'GST and routine compliance',
                        content: 'Operational compliance continues regardless of entity type once thresholds are crossed.'
                    }
                ]
            },
            {
                title: 'Structuring Before Fundraising',
                points: [
                    {
                        subtitle: 'Cap table clarity is critical',
                        content: 'Unstructured equity allocation creates dilution complications later.'
                    },
                    {
                        subtitle: 'ESOP planning should be deliberate',
                        content: 'Early structuring avoids tax inefficiencies and future restructuring effort.'
                    },
                    {
                        subtitle: 'Tax positioning matters during valuation',
                        content: 'Historical compliance gaps reduce investor confidence.'
                    }
                ]
            },
            {
                title: 'Governance Readiness',
                points: [
                    {
                        subtitle: 'Board documentation discipline',
                        content: 'Resolutions, agreements, and meeting records must be systematically maintained.'
                    },
                    {
                        subtitle: 'Financial reporting consistency',
                        content: 'Clean books and structured statements improve transparency and valuation perception.'
                    }
                ]
            }
        ]
    },
    'gst-compliance-sme': {
        title: 'GST Compliance Checklist for SMEs',
        readTime: '15 Min Read',
        executiveSummary: 'A structured checklist to reduce compliance stress and build systematic filing discipline. Designed for business owners who want clarity, not confusion. Covers registration triggers, filing structure, input tax credit framework, monthly discipline, risk areas, and documentation systems.',
        sections: [
            {
                title: 'Registration Triggers',
                points: [
                    {
                        subtitle: 'Turnover threshold applicability',
                        content: 'GST registration becomes mandatory once aggregate turnover crosses prescribed limits, varying by state and business type.'
                    },
                    {
                        subtitle: 'Interstate supply and e-commerce cases',
                        content: 'Even below threshold, certain activities like interstate sales or selling through e-commerce platforms may require compulsory registration.'
                    },
                    {
                        subtitle: 'Reverse charge scenarios',
                        content: 'Specific transactions shift tax liability to the recipient, making registration necessary in defined cases.'
                    }
                ]
            },
            {
                title: 'Filing Structure',
                points: [
                    {
                        subtitle: 'GSTR-1 (Outward supplies)',
                        content: 'Details of sales invoices must be reported accurately and within due dates to avoid mismatch issues.'
                    },
                    {
                        subtitle: 'GSTR-3B (Tax summary return)',
                        content: 'Monthly or quarterly summary return used for tax payment and liability declaration.'
                    },
                    {
                        subtitle: 'Annual return obligations',
                        content: 'Year-end consolidation ensures reconciliation between periodic filings and financial statements.'
                    }
                ]
            },
            {
                title: 'Input Tax Credit Framework',
                points: [
                    {
                        subtitle: 'Eligible vs blocked credits',
                        content: 'Not all GST paid qualifies as credit; certain expenses are specifically restricted under law.'
                    },
                    {
                        subtitle: 'Invoice discipline is essential',
                        content: 'Credit can only be claimed when supplier invoices are properly uploaded and compliant.'
                    },
                    {
                        subtitle: 'Matching concept',
                        content: 'Mismatch between purchase data and supplier filings may lead to ITC reversal or notices.'
                    }
                ]
            },
            {
                title: 'Monthly Discipline Checklist',
                points: [
                    {
                        subtitle: 'Sales reconciliation',
                        content: 'Ensure reported revenue matches books and tax filings.'
                    },
                    {
                        subtitle: 'Purchase reconciliation',
                        content: 'Verify vendor filings to protect eligible input credit.'
                    },
                    {
                        subtitle: 'Timely tax payment',
                        content: 'Delays attract interest and penalties, impacting cash flow planning.'
                    }
                ]
            },
            {
                title: 'Risk Areas to Monitor',
                points: [
                    {
                        subtitle: 'Late filing penalties',
                        content: 'Even nil returns attract late fees if not filed within prescribed deadlines.'
                    },
                    {
                        subtitle: 'ITC reversals',
                        content: 'Non-payment to vendors within specified timelines can trigger reversal requirements.'
                    },
                    {
                        subtitle: 'Mismatch notices',
                        content: 'Automated notices are common when reporting inconsistencies arise.'
                    }
                ]
            },
            {
                title: 'Documentation System',
                points: [
                    {
                        subtitle: 'Invoice archiving and digital records',
                        content: 'Proper storage simplifies audit and scrutiny response.'
                    },
                    {
                        subtitle: 'Vendor validation',
                        content: 'Regularly verifying vendor compliance reduces ITC exposure risk.'
                    },
                    {
                        subtitle: 'Audit readiness mindset',
                        content: 'Maintaining organized documentation prevents operational disruption during review.'
                    }
                ]
            }
        ]
    },
    'financial-health-review': {
        title: 'Financial Health Review Framework',
        readTime: '20 Min Read',
        executiveSummary: 'This guide explains how to interpret financial statements and assess operational stability through structured analysis beyond profit numbers. It covers why profit is not enough, reading the P&L properly, cash flow analysis, cost structure evaluation, liquidity indicators, and when to initiate a structured financial review.',
        sections: [
            {
                title: 'Why Profit Is Not Enough',
                points: [
                    {
                        subtitle: 'Profit does not equal cash availability',
                        content: 'A company may show accounting profit but still face liquidity stress due to receivables, inventory, or debt servicing gaps.'
                    },
                    {
                        subtitle: 'Cash flow determines operational stability',
                        content: 'Sustainable operations depend more on cash movement than reported profitability alone.'
                    }
                ]
            },
            {
                title: 'Reading the Profit & Loss Statement Properly',
                points: [
                    {
                        subtitle: 'Revenue trend analysis',
                        content: 'Consistent growth indicates demand stability, while fluctuations may signal operational or market volatility.'
                    },
                    {
                        subtitle: 'Gross and operating margins',
                        content: 'Margins reveal cost efficiency and pricing strength beyond top-line numbers.'
                    },
                    {
                        subtitle: 'Expense ratios',
                        content: 'Tracking fixed and variable costs helps identify pressure points affecting profitability.'
                    }
                ]
            },
            {
                title: 'Cash Flow Analysis Basics',
                points: [
                    {
                        subtitle: 'Operating cash flow',
                        content: 'Shows whether core business activities generate sufficient cash.'
                    },
                    {
                        subtitle: 'Investing cash flow',
                        content: 'Reflects capital expenditure and long-term asset allocation decisions.'
                    },
                    {
                        subtitle: 'Financing cash flow',
                        content: 'Indicates reliance on debt or equity to sustain operations.'
                    }
                ]
            },
            {
                title: 'Cost Structure Evaluation',
                points: [
                    {
                        subtitle: 'Fixed vs variable cost clarity',
                        content: 'Understanding cost behavior helps manage break-even levels and scalability.'
                    },
                    {
                        subtitle: 'Contribution margin awareness',
                        content: 'Knowing how much each unit contributes toward fixed costs improves pricing discipline.'
                    }
                ]
            },
            {
                title: 'Liquidity Indicators',
                points: [
                    {
                        subtitle: 'Current ratio and working capital',
                        content: 'Measures short-term financial strength and ability to meet obligations.'
                    },
                    {
                        subtitle: 'Receivable and payable cycle',
                        content: 'Monitoring collection efficiency prevents unnecessary cash pressure.'
                    }
                ]
            },
            {
                title: 'When to Initiate Structured Review',
                points: [
                    {
                        subtitle: 'Profit but recurring cash shortages',
                        content: 'Indicates structural imbalance requiring deeper analysis.'
                    },
                    {
                        subtitle: 'Rapid growth without control systems',
                        content: 'Scaling without financial discipline increases operational risk.'
                    },
                    {
                        subtitle: 'Pre-expansion or funding stage',
                        content: 'Structured review strengthens decision-making before major commitments.'
                    }
                ]
            }
        ]
    }
};
