export const caseStudies = {
  'nebula-analytics': {
    title: 'Designing Enterprise SaaS Experiences: The UX Behind a Scalable Bot Building Framework',
    published: 'May 21, 2025',
    role: 'Product Designer',
    toolsUsed: [
      { name: 'Figma', description: 'for wireframing, prototyping, and visual design.' },
      { name: 'Pen & Paper', description: 'for quick ideation, system mapping, and user flows.' },
      { name: 'Common Sense', description: "for prioritizing simplicity, thinking from the user's perspective, and not over-designing what didn't need to be." },
    ],
    details: [
      { label: 'Timeline', value: 'May 2025' },
      { label: 'Type', value: 'Product Design' },
    ],
    directive:
      'We need a Bot Creation Framework (BCF) that enables anyone — regardless of technical background — to design, build, and deploy bots independently.',
    overview: [
      'As conversational bots became a core part of client engagement, our company faced a recurring bottleneck: building bots for each client required significant developer effort. Every implementation involved repetitive logic setup, back-and-forth collaboration, and custom code — a process that simply didn\'t scale as demand grew.',
      'What if we could productize our bot-building expertise into a standalone platform that even business owners could use themselves?',
    ],
    problemIntro: 'This wasn\'t just a design challenge. It was a scalability and democratization challenge: How do we take something as logic-heavy and branching as conversational flows — and turn it into something visual, intuitive, and modular, without losing power?',
    problem: [
      'Internally (Primary): Empower non-technical employees to build bots without engineering support.',
      'Externally (Secondary): Create a self-serve bot creation tool for small business owners, unlocking a new product line and revenue stream.',
      'We weren\'t trying to build another chatbot tool for developers. We were trying to create a product that could let anyone — even someone unfamiliar with logic trees or APIs — structure a complete conversation flow on their own.',
    ],
    exploringEcosystem: 'With the initial requirement defined, I immersed myself in the world of conversational tools. I explored user forums, product demos, tutorials, and case studies to uncover how target users — like e-commerce owners, support teams, and marketers — approached bot building. These were people who knew what they wanted their bots to say, but not necessarily how to make that happen without engineering help.',
    discoveryIntro: 'My goal was to understand not just who our users were, but how they thought. What mental models they brought to designing conversations. Where they struggled. What "intuitive" meant to them in practice. This foundational research helped frame design decisions around real expectations, not just assumptions.',
    discoveryCards: [
      {
        title: 'Competitor Analysis',
        body: 'Analyzed tools like Dialogflow, Botpress, voiceflow. Each platform offered valuable insights into what works — and what doesn\'t: Complexity of setup. Flexibility in designing flows. Support for integrations & APIs. Target user personas.',
      },
      {
        title: 'Stakeholder & SME Workshops',
        body: 'Collaborated with Product Owners and SMEs to: Define a successful MVP with core features to support 80% of use cases. Map out technical feasibility within the company\'s infrastructure. Break down long-term vision into immediate phases. This scoping phase helped bring clarity on what must be built now vs. later, and what would provide immediate value to our users.',
      },
      {
        title: 'Conducted Interviews',
        body: 'Internal teams using bots for automation. Potential external users (where available). SMEs with deep domain knowledge in conversational design. These conversations happened regularly throughout the project. It wasn\'t just a one-time research sprint — it was an ongoing loop of validation, refinement, and alignment.',
      },
      {
        title: 'Emergent Personas',
        body: 'Amit, a support executive who wants to reuse bot logic, and spin up new bots quickly for new clients. Rajesh, solo e-commerce store owner who needs automation but can\'t code. These personas weren\'t just theoretical — they were anchored in actual workflows happening within the company. These personas grounded the design in reality and helped stress-test whether each decision would scale across real-world scenarios.',
      },
    ],
    strategyIntro: 'With clarity on the real-world pain points, I began breaking down the complexity of conversational logic into digestible building blocks.',
    strategyPoints: [
      'Modular Thinking: Designing in Chunks. Broke the problem into modular UX challenges (e.g., linking nodes, setting conditions). Validated each chunk independently. Continuously mapped back to the big picture (the full bot experience). This allowed focused design, easier testing, and faster iteration.',
      'Breaking the Problem Down. How do we represent logic and flow visually? How do we simplify branching without oversimplifying? How can we make conversation nodes feel "natural" to create and connect?',
    ],
    principles: [
      'Clarity: Even first-time users should understand how to start',
      'Flexibility: Should support both simple FAQ bots and complex flows',
      'Feedback: Immediate preview or validation of each step',
      'Progressive Disclosure: Start simple, reveal complexity only when needed',
    ],
    iterationIntro: 'Sketches → Wireframes → Prototype. Sketching Fast, Validating Early. I began with quick sketches for each core function — like adding message blocks, connecting steps, defining conditions — and shared them in informal reviews with SMEs. This allowed us to test conceptual clarity early without investing in high-fidelity mockups.',
    iterationDetails: [
      'Mid-Fidelity Wireframes. Once sketches were aligned, I developed mid-fidelity wireframes to solidify: Layout structure. Information hierarchy. Interaction flow (e.g., drag & drop logic, connection lines, nested nodes). Contextual settings for each block (e.g., message text, input type, API triggers). Each of these became a mini design sprint or micro-task, validated through SME conversations or quick usability feedback loops. These wireframes became a living design system — evolving as new use cases emerged.',
      'Framing Research for Impact. Throughout the process, I regularly asked: How will this feature feel to someone who\'s never built a bot before? I kept aligning the research back to: Ease of understanding. Visual hierarchy of actions. User confidence and control.',
    ],
    wireframes: [
      'Layout structure',
      'Information hierarchy',
      'Interaction flow (e.g., drag & drop logic, connection lines, nested nodes)',
      'Contextual settings for each block (e.g., message text, input type, API triggers)',
    ],
    prototype:
      'To simulate a real-world use case, I created an end-to-end prototype of a movie ticket booking bot. This example combined key features: Intent setup (e.g., "Book a ticket", "Check ticket status"). Conditional logic. Input handling. Dynamic API calls. Carousel components for ticket options. This working prototype was presented to stakeholders, triggering valuable feedback around: Visibility of logic paths. Ease of tracing a user journey. Clarity of node functions.',
    prototypeLink:
      'https://www.figma.com/design/kxAmPLUAhrvs9ac9SbjtFB/BCF_for-embed?node-id=1-1188&t=1avwYKjAHm2XKs09-1',
    feedbackIntro: 'To validate core usability and flow clarity, I conducted guided user testing sessions with internal team members across support, marketing, and operations. Rather than a full-blown, high-fidelity prototype, I used a click-based directional prototype that walked users through one pre-defined path of the bot-building process.',
    feedbackContext: 'While this limited organic exploration, it helped in surfacing immediate points of confusion, hesitation, or delight.',
    feedback: [
      'Editing a node felt disconnected',
      'Users forgot what a node was doing',
      'Preview panel is little disconnected',
    ],
    iterations: [
      'Improving visual distinction between different node types',
      'Enhancing connection clarity (especially in complex trees)',
      'Streamlining the side panel for editing node content',
      'Soft shadows and contrast for accessibility',
      'Grouping the flows for simplicity',
    ],
    limitedInteractivity: 'Limited Interactivity in Testing. The prototype used for early user testing was linear and guided, which meant: Users couldn\'t explore freely or test edge cases. We couldn\'t measure how users would behave in less predictable scenarios. It missed opportunities to uncover issues in more advanced features (like branching or editing existing flows). Scalability testing (e.g., 100+ node flows) was not deeply explored in the prototype.',
    visualIntro:
      'After iterations based on internal feedback, I moved into the visual design phase. The aesthetic was purposefully neutral and approachable — friendly but not cartoonish, simple but not bare.',
    visualDecisions: [
      'Clarity: Minimal but clear layout with consistent iconography',
      'Scalability: Flows should remain navigable even at scale',
      'Accessibility: Color contrast, keyboard nav considerations',
      'Tone: Friendly and empowering — for non-developers',
    ],
    reflection: [
      'Designing BCF wasn\'t just about making a UI — it was about translating conversation logic into a human-friendly design system.',
      'For internal users, who know what they want to say but not how to code it, BCF empowered them to automate, test, and scale without friction.',
      'It turned a bottleneck into a platform — and a cost center into a creative tool.',
    ],
    worked: [
      'Continuous validation with SMEs ensured feasibility',
      'Chunking complex logic into mini flows made the system manageable',
      'Using realistic scenarios for prototypes made feedback more relevant',
    ],
    gaps:
      'In future iterations, I would prioritize building a more dynamic prototype — even mid-fidelity — that allows exploratory interaction and multi-path testing. This would give richer, more realistic usability insights earlier in the process.',
    learnings: [
      'Systems thinking',
      'Rapid iteration',
      'Cross-functional collaboration',
      'But my biggest growth came from the people side of product design. From cross-functional collaboration to stakeholder communication, I learned how essential it is to: Ask better questions. Understand different perspectives. Bring others into the design process. Sometimes, that meant advocating for a micro-interaction or a custom layout — not because it was easy, but because it made the experience feel thoughtful and intentional. Getting buy-in for those details while maintaining trust and forward motion taught me that good design is as much about relationships as it is about pixels.',
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
