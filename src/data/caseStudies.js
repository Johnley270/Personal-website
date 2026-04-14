export const caseStudies = {
  'nebula-analytics': {
    title: 'Designing Enterprise SaaS Experiences: The UX Behind a Scalable Bot Building Framework',
    published: 'May 20, 2025',
    details: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Tools Used', value: 'Figma, Pen & Paper, Common Sense' },
      { label: 'Focus', value: 'No-code workflow, system design, conversational AI' },
    ],
    directive:
      'We need a Bot Creation Framework (BCF) that enables anyone - regardless of technical background - to design, build, and deploy bots independently.',
    overview: [
      'The project focused on designing a no-code interface for fast and flexible bot building.',
      'As conversational bots became a core part of client engagement, building bots for each client required significant developer effort. Every implementation involved repetitive logic setup, back-and-forth collaboration, and custom code.',
      'The opportunity was to productize bot-building expertise into a standalone platform that internal teams and business owners could use without engineering support.',
    ],
    problem: [
      'The company needed a scalable way to help non-technical employees build bots without relying on engineering support.',
      'The secondary goal was to create a self-serve bot creation tool for small business owners, unlocking a new product line and revenue stream.',
      'The core challenge was turning logic-heavy, branching conversational flows into something visual, intuitive, and modular without losing power.',
    ],
    discoveryIntro:
      'The research focused on understanding not just who the users were, but how they thought when designing conversations.',
    discoveryCards: [
      {
        title: 'Competitor Analysis',
        body: 'I analyzed tools like Dialogflow, Botpress, and Voiceflow to understand setup complexity, flow flexibility, integration support, and target user personas.',
      },
      {
        title: 'Stakeholder & SME Workshops',
        body: 'I collaborated with product owners and SMEs to define a successful MVP, map technical feasibility, and separate immediate value from long-term vision.',
      },
      {
        title: 'User Conversations',
        body: 'Interviews with internal teams, potential external users, and conversational design SMEs helped surface current frustrations, mental workflows, and fears around breaking technical systems.',
      },
      {
        title: 'Emergent Personas',
        body: 'The research shaped provisional personas such as a support executive who needed reusable bot logic and a solo e-commerce owner who needed automation without code.',
      },
    ],
    strategyIntro:
      'With clarity on real-world pain points, the design work broke conversational logic into digestible building blocks that could be validated independently and mapped back to the full bot experience.',
    principles: [
      'Clarity: Even first-time users should understand how to start.',
      'Flexibility: The system should support both simple FAQ bots and complex flows.',
      'Feedback: Users need immediate preview or validation of each step.',
      'Progressive Disclosure: Start simple and reveal complexity only when needed.',
    ],
    iterationIntro:
      'The process moved from sketches to wireframes to prototype, with each core function treated as a mini design sprint.',
    wireframes: [
      'Layout structure',
      'Information hierarchy',
      'Interaction flow, including drag and drop logic, connection lines, and nested nodes',
      'Contextual settings for each block, including message text, input type, and API triggers',
    ],
    prototype:
      'To simulate a real-world use case, I created an end-to-end prototype of a movie ticket booking bot that combined intent setup, conditional logic, input handling, dynamic API calls, and carousel components for ticket options.',
    prototypeLink:
      'https://www.figma.com/design/kxAmPLUAhrvs9ac9SbjtFB/BCF_for-embed?node-id=1-1188&t=1avwYKjAHm2XKs09-1',
    feedback: [
      'Editing a node felt disconnected.',
      'Users forgot what a node was doing.',
      'Preview panel is little disconnected.',
    ],
    iterations: [
      'Improving visual distinction between different node types',
      'Enhancing connection clarity, especially in complex trees',
      'Streamlining the side panel for editing node content',
      'Soft shadows and contrast for accessibility',
      'Grouping the flows for simplicity',
    ],
    visualIntro:
      'After internal feedback, the visual design moved toward a neutral and approachable interface: friendly but not cartoonish, simple but not bare.',
    visualDecisions: [
      'Clarity: Minimal but clear layout with consistent iconography.',
      'Scalability: Flows should remain navigable even at scale.',
      'Accessibility: Color contrast and keyboard navigation considerations.',
      'Tone: Friendly and empowering for non-developers.',
    ],
    reflection: [
      'Designing BCF was about translating conversation logic into a human-friendly design system.',
      'For internal users who knew what they wanted to say but not how to code it, BCF empowered them to automate, test, and scale without friction.',
      'It turned a bottleneck into a platform, and a cost center into a creative tool.',
    ],
    worked: [
      'Continuous validation with SMEs ensured feasibility.',
      'Chunking complex logic into mini flows made the system manageable.',
      'Using realistic scenarios for prototypes made feedback more relevant.',
    ],
    gaps:
      'In future iterations, I would prioritize building a more dynamic prototype, even mid-fidelity, that allows exploratory interaction and multi-path testing. This would give richer, more realistic usability insights earlier in the process.',
    learnings: [
      'Systems thinking',
      'Rapid iteration',
      'Cross-functional collaboration',
      'Ask better questions',
      'Understand different perspectives',
      'Bring others into the design process',
    ],
  },
  'flowkit-design-system': null,
  'pulse-health': null,
  'mint-finance': null,
  'rubee-app': {
    heroSubtitle: 'Effortlessly guiding users to a streamlined financial management experience',
    timeline: 'Nov 2020 - Dec 2020',
    tools: 'Figma , Figjam ,Protopie',
    team: 'Me and only me',
    background:
      'This project was one of several I tackled as part of the DESIGNWINGS UX PROGRAMME, where I gained hands-on experience in utilizing UX processes to address user experience challenges.',
    about: [
      'RUBEE simplifies the process of financial management by allowing users to handle all their income and expenses in one convenient location.',
      'Budgets and statistics are among the key features that assist users in monitoring their finances and keeping track of their financial situation.',
    ],
    problem: [
      'Many people struggle with managing their finances, leading to poor decisions and debt.',
      'RUBEE is an app that helps users track expenses and make better financial choices with its budget and statistics features.',
      'By providing a simple and user-friendly platform, RUBEE empowers users to take control of their finances.',
    ],
    researchIntro:
      'In order to fully immerse myself in the world of my target user, I dove deep into research mode. This included conducting a thorough competitive audit, gathering insights through surveys and interviews, and scouring the depths of the internet for valuable information.',
    researchObjectives: [
      'Identifying the challenges and goals of users, as well as their unmet needs and frustrations.',
      'Evaluating the market deficiencies and analyzing the strengths and weaknesses of competitors.',
    ],
    competitiveFindings: [
      'An overabundance of features can negatively impact an app\'s usability and user experience.',
      'Apps that have found the perfect balance between features and usability tend to receive higher ratings.',
      'Money Manager app offers easy navigation and the capability to export data.',
      'A prevalent issue with many apps is the use of display ads, which often leads users to seek alternate options.',
    ],
    primaryResearch:
      'I started off by sending out a survey to potential users and from there, handpicked a select few for in-depth interviews. These interviews served a dual purpose - not only did they provide a plethora of inspiration for the app, but they also gave me valuable insight into the habits, behaviours and pain-points of my target audience.',
    userQuotes: [
      'The interface is too complicated and confusing',
      'Typing and carefully entering the data is worse than writing on paper',
      'I would stop using the app after they keep asking to use premium account',
      'Most of the app are too much of a pain to use',
      'I don\'t have that much energy and motivation to enter all the expenses and data',
    ],
    researchConsolidation: [
      'Uncovering about the user through research, I crafted a primary persona to serve as a beacon in my design journey.',
      'Empathy mapping painted a vivid picture of the user\'s innermost thoughts and struggles, guiding me towards creating solutions that truly resonate.',
      'And with customer journey mapping, I delved into the user\'s journey with the app, uncovering hidden gems of inspiration and opportunities for delightful experiences.',
    ],
    painPoints: [
      {
        title: 'High Price',
        description: 'There is a demand among users for an app that is straightforward and has basic functionality',
      },
      {
        title: 'Forget Expense Details',
        description: 'Because transactions occur at various times throughout the day, it can be challenging to keep track of everything.',
      },
      {
        title: 'High learning curve',
        description: 'The steep learning curve of the app can be frustrating for users, leading to them abandoning the app because they are unsure of the next steps.',
      },
      {
        title: 'Lack Of committment',
        description: 'Filling in information consistently requires dedication which not all users are willing to commit to',
      },
    ],
    ideationIntro:
      'Having gained a thorough understanding of the user and the problem at hand, it is now time to move on to the ideation stage.',
    ideationDetails:
      'I transformed the challenges into HMW questions, which not only stimulated idea generation but also assisted me in identifying the most pressing issues and addressing them one at a time.',
    designApproach: [
      'To keep users engaged, an incentivization system is implemented.',
      'In-app banner ads are integrated to keep the app free.',
      'Rewards are used to retain engagement, and a strategy promoting financial education through regular blogs and random rewards for reading is implemented.',
      'Effective app design is about effectively implementing a variety of features in a compact format, making it functional, user-friendly, and desirable.',
      'The app should be easy to use, with minimal steps for task completion, user autonomy and control, and error recovery.',
      'The design should be flexible, minimalist and visually pleasing,',
    ],
    wireframesIntro:
      'After generating as many ideas as possible , I narrowed down the best wireframes and best user flows which are simple and effective to use',
    features: [
      {
        title: 'ONBOARDING',
        body: 'Onboarding screens helps the users what they can expect to do in the app.',
      },
      {
        title: 'LOGIN',
        body: 'Simple login process that minimizes the number of steps taken by the users.',
      },
      {
        title: 'STATISTICS',
        body: 'Statistics help users to understand their spending behavior and also helps visualizing the finances',
      },
      {
        title: 'Pain points',
        body: 'Reading the number puts a huge cognitive load on the user. Brings the phone closely to read the data puts strain on users eye. Has to take a guess of the number.',
      },
      {
        title: 'IDEATION',
        body: 'Move across the graph using thumb Display the value at graph point',
      },
      {
        title: 'Graphs in apps for statistics',
        body: 'Graphs in apps for statistics',
      },
      {
        title: 'REWARDS',
        body: 'Rewards section shows all the rewards i.e gift cards that the user got for referring and also doing daily tasks.',
      },
      {
        title: 'HOME',
        body: 'Home page consists of basic overview of the finance condition and also shows any important notification or budget overuse. Forgiving the users mistakes by allowing them to easily move to the previous steps without having to start all over again Easier way to read the graph by moving the finger along the graph and the top bar automatically display the value at that point Rewarding the users to enter the income and expense details encourages the user to spend more time on the app.',
      },
      {
        title: 'BLOGS',
        body: 'Blogs help the user to gain financial knowledge by reading curated blogs for them. It increased the users time spent on the app.',
      },
      {
        title: 'BUDGETS',
        body: 'Budgets allow users to set a certain limit for expenses .',
      },
    ],
    learnings: [
      'This project offers a valuable chance to gain insight into the design process.',
      'The nature of UX design often requires adjustments to the plan, and progress may be impeded at times.',
      'The solution is to keep experimenting and iterating. While it may appear to be a lengthy process, it ultimately proves effective.',
      'Additionally, at specific stages of design, it\'s beneficial to focus on the bigger picture rather than getting bogged down in minor details.',
    ],
  },
}
