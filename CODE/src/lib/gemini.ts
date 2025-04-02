import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('ENTER YOUR API KEY');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export async function simplifyLegalDocument(text: string): Promise<string> {
  const prompt = `
    As a legal expert, please analyze and simplify this legal document. Provide a clear, easy-to-understand explanation that covers:

    1. Document Type & Purpose
    - What kind of document is this?
    - What is its main purpose?

    2. Key Points
    - What are the main rights and obligations?
    - What actions are required from each party?
    - What are the important deadlines or dates?

    3. Important Terms
    - Explain any complex legal terms in simple language
    - Highlight any financial obligations

    4. Risks & Considerations
    - What should the reader be particularly aware of?
    - Are there any potential risks or obligations?

    5. Next Steps
    - What actions should the reader take?
    - Are there any deadlines to meet?

    Please analyze this document and provide a clear explanation: ${text}

    Format the response in clear sections with bullet points where appropriate. Use simple, everyday language.
  `;
  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

export async function detectHiddenClauses(text: string): Promise<string> {
  const prompt = `
    As a legal expert, analyze this document and identify potentially concerning clauses. For each identified clause:

    1. Quote the specific clause
    2. Explain why it's concerning
    3. Describe potential implications
    4. Suggest what to watch out for
    5. Recommend possible negotiations or modifications

    Document to analyze: ${text}

    Format the response with clear headings and bullet points for each clause identified.
  `;
  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

export async function findEligibleSchemes(userInfo: {
  age: number;
  occupation: string;
  income: number;
  location: string;
}): Promise<string> {
  const prompt = `
    As a government benefits expert, suggest relevant schemes and benefits based on:
    - Age: ${userInfo.age}
    - Occupation: ${userInfo.occupation}
    - Annual Income: ${userInfo.income}
    - Location: ${userInfo.location}
    
    For each scheme provide:
    1. Scheme name and category
    2. Brief description and main benefits
    3. Specific eligibility criteria
    4. How to apply
    5. Required documents
    6. Important deadlines if any

    Format the response with clear headings for each scheme and bullet points for details.
  `;
  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

export async function searchLegalInfo(query: string): Promise<string> {
  const prompt = `
    As a legal expert, provide helpful information about the following legal query:
    "${query}"
    
    Please include:
    1. A brief explanation of the legal concept or issue
    2. Key points that someone should know about this topic
    3. Common misconceptions or pitfalls to avoid
    4. Practical next steps or considerations
    5. When someone should consult with a lawyer on this matter
    
    Format your response with clear headings and bullet points where appropriate.
    Use simple, everyday language that a non-lawyer can understand.
  `;
  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

export async function findLocalLawyers(location: string, specialization: string = ''): Promise<string> {
  const prompt = `
    As a legal directory service, provide information about finding lawyers in ${location}${specialization ? ` specializing in ${specialization}` : ''}.
    
    Include in your response:
    1. General advice for finding qualified lawyers in this location
    2. What to look for when selecting a lawyer${specialization ? ` for ${specialization} cases` : ''}
    3. Typical fee structures and what to expect
    4. Questions to ask during an initial consultation
    5. Resources for finding verified lawyers in this area
    
    Format your response with clear headings and bullet points for readability.
    Note: This is general guidance only and not specific lawyer recommendations.
  `;
  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}