import { useEffect, useState } from "react";
import {
  CheckCircle2,
  HeartHandshake,
  MessageSquareText,
  Sparkles,
  Star,
} from "lucide-react";

const ratingLabels = ["Poor", "Fair", "Good", "Great", "Excellent"];
const REVIEW_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxM6-kCzMg1ukZtK9SJmvJa9FKXH0p3o4L_9aPqDNHuoOe_ZI8mnMeTkG-P8MRIfDZe1A/exec";
const Rating: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Regular Cleaning");
  const [review, setReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedReview, setSubmittedReview] = useState<{
    rating: number;
    service: string;
  } | null>(null);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (!submitted) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setSubmitted(false);
      setSubmittedReview(null);
    }, 5000);

    return () => window.clearTimeout(timeoutId);
  }, [submitted]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    if (!name.trim()) {
      setSubmitError("Please enter your name before submitting.");
      return;
    }

    if (!rating || !review.trim()) {
      setSubmitError(
        "Please choose a star rating and write a review before submitting.",
      );
      return;
    }

    if (!REVIEW_WEB_APP_URL) {
      setSubmitError(
        "Google Sheets endpoint is not configured yet. Add VITE_GOOGLE_SHEETS_WEB_APP_URL in your environment.",
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("service", service);
      formData.append("rating", rating.toString());
      formData.append("review", review);
      formData.append("submittedAt", new Date().toISOString());

      const res = await fetch(REVIEW_WEB_APP_URL, {
        method: "POST",
        body: formData,
      });
      const response = await res.json();
      console.log("=== SERVER RESPONSE ===");
      console.log("Response:", response);
      console.log("=== END RESPONSE ===");
      if (response.success) {
        setSubmittedReview({ rating, service });
        setSubmitted(true);
        setRating(0);
        setName("");
        setPhone("");
        setService("Regular Cleaning");
        setReview("");
      }
    } catch (error) {
      console.log("Error submitting review:", error);
      setSubmitError(
        "Could not save your review to Google Sheets. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-emerald-50 px-4 py-8 md:py-12">
      <section className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-xl ring-1 ring-emerald-100 md:p-10">
        <div className="mb-6 flex items-center justify-center gap-3 text-center">
          <div className="relative">
            <Sparkles className="h-10 w-10 text-emerald-600" />
            <Sparkles className="absolute inset-0 h-10 w-10 animate-pulse text-emerald-300 opacity-60" />
          </div>
          <span className="text-3xl font-bold tracking-tight text-slate-900">
            Wipely
          </span>
        </div>

        <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
          <HeartHandshake className="h-4 w-4" />
          Leave a quick review
        </div>

        <h1 className="text-center text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Share your rating for Wipely
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-slate-600 md:text-lg">
          This page is a standalone link for offline customers to give stars and
          write a review without visiting the rest of the site.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-700">
              Your rating
            </label>
            <div className="flex flex-wrap items-center gap-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRating(value)}
                  className="rounded-2xl border border-slate-200 bg-white p-3 transition hover:border-emerald-300"
                  aria-label={`Rate ${value} stars`}
                >
                  <Star
                    className={`h-7 w-7 ${value <= rating ? "fill-amber-400 text-amber-400" : "text-slate-300"}`}
                  />
                </button>
              ))}
              <span className="ml-2 text-sm font-medium text-slate-600">
                {rating
                  ? ratingLabels[rating - 1]
                  : "Tap a star to rate your experience"}
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">
                Your name <span className="text-rose-600">*</span>
              </span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
                placeholder="Required"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">
                Phone number
              </span>
              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                type="tel"
                placeholder="Optional"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">
              Service type
            </span>
            <select
              value={service}
              onChange={(event) => setService(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
            >
              <option>Regular Cleaning</option>
              <option>End of Lease Cleaning</option>
              <option>Spring Cleaning</option>
              <option>Custom Cleaning</option>
              <option>Carpet Cleaning</option>
              <option>Other</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">
              Write your review
            </span>
            <textarea
              value={review}
              onChange={(event) => setReview(event.target.value)}
              rows={6}
              placeholder="Tell us what you liked, how the team performed, or anything we should improve."
              className="w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
          >
            <MessageSquareText className="h-5 w-5" />
            {isSubmitting ? "Submitting..." : "Submit review"}
          </button>

          {submitError && (
            <div className="rounded-3xl border border-red-200 bg-red-50 p-4 text-red-700">
              {submitError}
            </div>
          )}

          {submitted && submittedReview && (
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" />
                <div>
                  <p className="font-semibold">Thanks for your feedback.</p>
                  <p className="mt-1 text-sm leading-6">
                    Your {submittedReview.rating}-star review for{" "}
                    {submittedReview.service} has been captured on this page.
                  </p>
                </div>
              </div>
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default Rating;
