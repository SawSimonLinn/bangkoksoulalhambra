'use server';
/**
 * @fileOverview A Genkit flow for generating appealing and authentic-sounding descriptions for menu items.
 *
 * - generateDishDescription - A function that handles the generation of dish descriptions.
 * - GenerateDishDescriptionInput - The input type for the generateDishDescription function.
 * - GenerateDishDescriptionOutput - The return type for the generateDishDescription function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateDishDescriptionInputSchema = z.object({
  dishName: z.string().describe('The name of the menu item, e.g., "Pad Thai".'),
  keyIngredients: z.array(z.string()).describe('A list of primary ingredients, e.g., ["rice noodles", "shrimp", "tamarind sauce"].'),
  flavorProfile: z.string().describe('A description of the dish\'s flavor profile, e.g., "sweet, sour, savory, with a hint of spice".'),
  dishType: z.string().describe('The type of dish, e.g., "appetizer", "main course", "dessert", "beverage".'),
  culturalContext: z.string().optional().describe('Optional: Any specific cultural context or origin story of the dish.'),
});
export type GenerateDishDescriptionInput = z.infer<typeof GenerateDishDescriptionInputSchema>;

const GenerateDishDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated appealing and authentic dish description.'),
});
export type GenerateDishDescriptionOutput = z.infer<typeof GenerateDishDescriptionOutputSchema>;

export async function generateDishDescription(input: GenerateDishDescriptionInput): Promise<GenerateDishDescriptionOutput> {
  return generateDishDescriptionFlow(input);
}

const generateDishDescriptionPrompt = ai.definePrompt({
  name: 'generateDishDescriptionPrompt',
  input: { schema: GenerateDishDescriptionInputSchema },
  output: { schema: GenerateDishDescriptionOutputSchema },
  prompt: `You are a marketing expert for Bangkok Soul, an authentic Thai restaurant. Your goal is to create enticing and authentic-sounding descriptions for our menu items.

The descriptions should reflect our brand values: "warm", "authentic Thai", "modern but cozy", and highlight "authentic Thai flavors". Avoid being overly verbose; keep it concise yet captivating.

Here are the details for the dish:
Dish Name: {{{dishName}}}
Key Ingredients: {{#each keyIngredients}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
Flavor Profile: {{{flavorProfile}}}
Dish Type: {{{dishType}}}
{{#if culturalContext}}Cultural Context: {{{culturalContext}}}{{/if}}

Generate an appealing dish description for the Bangkok Soul website.`,
});

const generateDishDescriptionFlow = ai.defineFlow(
  {
    name: 'generateDishDescriptionFlow',
    inputSchema: GenerateDishDescriptionInputSchema,
    outputSchema: GenerateDishDescriptionOutputSchema,
  },
  async (input) => {
    const { output } = await generateDishDescriptionPrompt(input);
    return output!;
  }
);
