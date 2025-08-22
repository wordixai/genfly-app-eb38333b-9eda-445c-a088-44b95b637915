import { Sparkles, Download, Palette, Grid, Users, Globe } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="t--h2 mb-6">
            Built for business.
            <br />
            Feels like play.
          </h2>
          <p className="t--p-lg c--solid-11">
            Chronicle brings powerful new ways to create, made for serious use cases for fast-moving, collaborative teams.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="relative mb-16">
          {/* Grid Lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-solid-5"></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-solid-5"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-solid-5"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:pr-16">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                  <h5 className="t--h5">Smart templates</h5>
                </div>
                <p className="c--solid-11">
                  Save your own templates that your team can insert or use to generate content.
                </p>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1332&h=1124&fit=crop"
                  alt="Smart templates feature"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="p-8 lg:pl-16 border-l border-solid-5 lg:border-l-0 lg:border-t-0">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Download className="w-6 h-6 text-white" />
                  <h5 className="t--h5">Social and PDF export</h5>
                </div>
                <p className="c--solid-11">
                  Share your Chronicle as a high quality PDF or beautiful animated GIF.
                </p>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1232&h=1094&fit=crop"
                  alt="Export feature"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Palette className="w-6 h-6 text-white" />
              <h5 className="t--h5">Themes & branding</h5>
            </div>
            <p className="c--solid-11">
              Add your logo, and switch up colors, fonts and backgrounds to match your style.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Grid className="w-6 h-6 text-white" />
              <h5 className="t--h5">Smart canvas</h5>
            </div>
            <p className="c--solid-11">
              Drag widgets in a freeform canvas, then tidy up to snap elements into neat layouts.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-white" />
              <h5 className="t--h5">Real-time collaboration</h5>
            </div>
            <p className="c--solid-11">
              Work together live with shared editing, cursors, and team workspaces.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-white" />
              <h5 className="t--h5">Publish to web</h5>
            </div>
            <p className="c--solid-11">
              Turn your Chronicle into a shareable link and track engagement and views.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;