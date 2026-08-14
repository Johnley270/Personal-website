# AIDE Case Study

Status: Working draft
Hidden page route: `/draft-cs-j7x2k9`
Implementation target: `src/pages/DraftCaseStudy.jsx`

## Working Agreement

Before making page or HTML/React changes, we will shape the case study here first.
This file is the source of truth for the story, structure, content decisions, and open questions.

Once the narrative feels clear, we will convert the approved sections into the hidden draft page.

## Current Discussion Notes

- The hidden page already exists at `/draft-cs-j7x2k9`.
- The route works locally.
- The current page content is only a placeholder outline.
- Next step is to write and refine the AIDE case-study content in Markdown before updating the React page.

## Goal Of The Case Study

Create a clear, recruiter/client-friendly case study that explains:

- What AIDE is
- What problem it solves
- What role Johnley played
- How the design process moved from ambiguity to structure
- What research, decisions, iterations, and outcomes shaped the product
- What makes the work relevant to agentic AI, workflow tools, or complex product design

## Proposed Page Structure

### 1. Snapshot

Purpose: Give readers the fast context.

Content to capture:

- Project name
- Role
- Timeline
- Team
- Tools
- Domain
- Platform
- Current status

Draft placeholder:

> AIDE is a [product/tool/system] designed to help [target users] accomplish [main job] through [core mechanism].

### 2. Background

Purpose: Explain the situation that created the need for AIDE.

Questions to answer:

- What was happening before AIDE existed?
- Who was struggling?
- What workflow was slow, unclear, manual, or fragmented?
- Why did this matter to the business or users?

### 3. Problem Definition

Purpose: State the core design challenge.

Possible format:

> How might we help [user type] [achieve outcome] without [major friction/risk]?

Questions to answer:

- What was the main user pain?
- What was the product/business constraint?
- What made the problem complex or ambiguous?
- What had to be simplified without losing power?

### 4. Users And Use Cases

Purpose: Show who the product was designed for.

Content to capture:

- Primary users
- Secondary users
- Key jobs to be done
- Common scenarios
- User confidence level with AI/workflow tools

### 5. Research And Discovery

Purpose: Show how assumptions were tested.

Possible research inputs:

- Stakeholder conversations
- User interviews
- Existing workflow analysis
- Competitive or adjacent product review
- Internal tool/process audit
- Prototype feedback

Key outputs to capture:

- Pain points
- User mental models
- Repeated workflow patterns
- Constraints
- Opportunities

### 6. Design Strategy

Purpose: Explain the design principles and product direction.

Possible principles:

- Make complex workflows understandable
- Keep users in control
- Show system state clearly
- Make AI actions explainable
- Support iteration and recovery
- Reveal complexity progressively

### 7. Information Architecture And Flow

Purpose: Show how the product was organized.

Content to capture:

- Main navigation model
- Core user flow
- Entry points
- Decision points
- Creation/editing/review loop
- How users recover from mistakes

### 8. Wireframes And Iteration

Purpose: Show how the design evolved.

Content to capture:

- Early layout explorations
- What changed after review
- Tradeoffs made
- Problems found in early versions
- Final direction and why it worked better

### 9. Visual Design

Purpose: Explain the final interface decisions.

Content to capture:

- Layout system
- Component patterns
- States and feedback
- Color/typography decisions
- Accessibility considerations
- How the visual design supports trust and clarity

### 10. Outcome

Purpose: Show impact or expected value.

Content to capture:

- What improved
- What users/stakeholders responded to
- Any measurable result
- Any qualitative signal
- What the product enabled

If no metrics are available yet, use honest outcome framing:

> The project established a scalable design direction and clarified the workflow enough for implementation discussions, stakeholder alignment, and future validation.

### 11. Reflection And Learnings

Purpose: Close with growth and product-design maturity.

Content to capture:

- What worked well
- What was difficult
- What would be improved next
- What this project taught about designing AI/workflow products

## Content Inventory

Known assets or inputs:

- Hidden draft page: `/draft-cs-j7x2k9`
- Existing draft component: `src/pages/DraftCaseStudy.jsx`

Needed assets or inputs:

- AIDE product description
- Screenshots or Figma frames
- Role and timeline
- User/problem details
- Research notes
- Iteration notes
- Outcome or stakeholder feedback

## Open Questions

- What does AIDE stand for?
- Who is the primary user?
- Is this an internal tool, external product, or portfolio concept?
- What was John's exact role?
- What was the timeline?
- What tools were used?
- Are there screenshots, Figma links, or prototype assets?
- What outcome should the case study claim?

## Implementation Plan After Content Approval

1. Convert this Markdown structure into data or JSX.
2. Replace placeholder text in `DraftCaseStudy.jsx`.
3. Add images or embeds only after the written story is stable.
4. Check responsive layout locally.
5. Build the project.
6. Commit and push the approved page update.

## Working Checklist

- [x] Create Markdown source-of-truth file.
- [ ] Fill AIDE project details.
- [ ] Draft the narrative section by section.
- [ ] Review tone and structure.
- [ ] Confirm visual assets.
- [ ] Update hidden React page.
- [ ] Test locally.
- [ ] Build and deploy.
