
"use client";

import { useState } from "react";
import { generateDishDescription, type GenerateDishDescriptionInput } from "@/ai/flows/generate-dish-description-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Sparkles, UtensilsCrossed, Copy, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Link from "next/link";

export default function DishGeneratorPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setResult(null);

    const formData = new FormData(event.currentTarget);
    const input: GenerateDishDescriptionInput = {
      dishName: formData.get("dishName") as string,
      keyIngredients: (formData.get("keyIngredients") as string).split(",").map(i => i.trim()),
      flavorProfile: formData.get("flavorProfile") as string,
      dishType: formData.get("dishType") as string,
      culturalContext: formData.get("culturalContext") as string,
    };

    try {
      const output = await generateDishDescription(input);
      setResult(output.description);
      toast({ title: "Description generated!", description: "AI has crafted a new description for your menu item." });
    } catch (error) {
      toast({ variant: "destructive", title: "Generation failed", description: "There was an error generating the description." });
    } finally {
      setLoading(false);
    }
  }

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({ title: "Copied!", description: "Description copied to clipboard." });
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-1.5 rounded-full">
              <UtensilsCrossed className="w-4 h-4 text-white" />
            </div>
            <span className="font-headline text-xl font-bold text-primary">Bangkok Soul</span>
          </Link>
          <h1 className="text-sm font-medium text-muted-foreground">Admin Portal: AI Dish Descriptor</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-secondary" /> Dish Details
              </CardTitle>
              <CardDescription>Enter dish details to generate an authentic description.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="dishName">Dish Name</Label>
                  <Input id="dishName" name="dishName" placeholder="e.g. Pineapple Fried Rice" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dishType">Dish Type</Label>
                  <Select name="dishType" defaultValue="main course">
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="appetizer">Appetizer</SelectItem>
                      <SelectItem value="main course">Main Course</SelectItem>
                      <SelectItem value="dessert">Dessert</SelectItem>
                      <SelectItem value="beverage">Beverage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keyIngredients">Key Ingredients (comma separated)</Label>
                  <Input id="keyIngredients" name="keyIngredients" placeholder="e.g. Jasmine rice, Pineapple, Turmeric, Cashews" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="flavorProfile">Flavor Profile</Label>
                  <Input id="flavorProfile" name="flavorProfile" placeholder="e.g. Sweet, savory, nutty with a hint of turmeric" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="culturalContext">Cultural Context (Optional)</Label>
                  <Textarea id="culturalContext" name="culturalContext" placeholder="Origin story or specific region..." />
                </div>

                <Button type="submit" className="w-full bg-primary h-12 rounded-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
                    </>
                  ) : (
                    "Generate Description"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-none shadow-xl bg-white/50 backdrop-blur-md min-h-[400px] flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Generated Result</CardTitle>
                <CardDescription>AI-crafted description will appear here.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                {result ? (
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div className="p-6 bg-background rounded-2xl border-2 border-dashed border-primary/20 italic leading-relaxed text-lg flex-1">
                      {result}
                    </div>
                    <Button variant="outline" className="w-full rounded-full h-12" onClick={copyToClipboard}>
                      {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                      {copied ? "Copied" : "Copy to Clipboard"}
                    </Button>
                  </div>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-muted-foreground italic text-center px-6">
                    Fill out the form and click "Generate" to see the magic happen.
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
