import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LightboxModal } from "@/components/lightbox-modal";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Lightbox Modal Demo
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Image Lightbox Example */}
        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-xl font-medium">Image Lightbox</h2>
          <LightboxModal
            trigger={
              <Button variant="outline" className="w-full">
                Open Image Lightbox
              </Button>
            }
            title="Mountain Landscape"
            description="A beautiful mountain landscape captured at sunset"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-md">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Mountain landscape"
                fill
                className="object-cover"
              />
            </div>
          </LightboxModal>
        </div>

        {/* Content Lightbox Example */}
        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-xl font-medium">Content Lightbox</h2>
          <LightboxModal
            trigger={
              <Button variant="outline" className="w-full">
                Open Content Lightbox
              </Button>
            }
            title="Project Details"
            description="Information about our latest project"
          >
            <div className="prose prose-sm dark:prose-invert">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc,
                quis aliquam nisl nunc quis nisl.
              </p>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante.
              </p>
              <ul>
                <li>Feature one with detailed explanation</li>
                <li>Feature two with implementation details</li>
                <li>Feature three with technical specifications</li>
              </ul>
            </div>
          </LightboxModal>
        </div>

        {/* Form Lightbox Example */}
        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-xl font-medium">Form Lightbox</h2>
          <LightboxModal
            trigger={
              <Button variant="outline" className="w-full">
                Open Form Lightbox
              </Button>
            }
            title="Contact Us"
            description="Fill out this form to get in touch with our team"
            contentClassName="space-y-4"
          >
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    First name
                  </label>
                  <input
                    id="first-name"
                    className="border-input bg-background w-full rounded-md border px-3 py-2 text-sm"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Last name
                  </label>
                  <input
                    id="last-name"
                    className="border-input bg-background w-full rounded-md border px-3 py-2 text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="border-input bg-background w-full rounded-md border px-3 py-2 text-sm"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  className="border-input bg-background w-full rounded-md border px-3 py-2 text-sm"
                  rows={4}
                  placeholder="Your message here..."
                />
              </div>
              <Button className="w-full">Submit</Button>
            </form>
          </LightboxModal>
        </div>
      </div>
    </div>
  );
}
