import { Upload } from "lucide-react";
import { Button, Card, CardContent } from "@/components/ui";

export function UploadCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-blue-100 p-3 text-blue-700">
            <Upload className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-950">CSV Upload</h3>
            <p className="mt-2 text-sm text-slate-600">
              Drag in a CSV or upload a historical export to bootstrap your
              feedback inbox for analysis.
            </p>
            <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <p className="text-sm text-slate-600">
                Drop `sample-feedback.csv` here or choose a file.
              </p>
              <Button variant="secondary" className="mt-4">
                Choose CSV
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

