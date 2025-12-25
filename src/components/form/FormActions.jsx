import { Button } from "@/components/ui/button";

export default function FormActions({ onBack, isLast, isSubmitting }) {
  return (
    <div className="flex gap-3 pt-4">
      {onBack && (
        <Button
          type="button"
          variant="outline"
          className="w-full border-indigo-500 text-indigo-600 hover:bg-indigo-50"
          onClick={onBack}
        >
          Back
        </Button>
      )}

      <Button
        type="submit"
        className="w-full bg-linear-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-600 hover:to-violet-600 disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isLast ? "Submit" : "Next"}
      </Button>
    </div>
  );
}
