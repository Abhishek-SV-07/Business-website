"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Settings, Cog, Wrench } from "lucide-react"
import { QuoteForm } from "@/components/quote-form"

export default function HomePage() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Settings className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold text-foreground">Sri Automation</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#capabilities" className="text-muted-foreground hover:text-foreground transition-colors">
                Capabilities
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setIsQuoteFormOpen(true)}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30 opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Precision Manufacturing
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Precision CNC & VMC <span className="text-accent">Machining Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Transform your metal components with our advanced CNC turning centers, turn mills, and 4-axis VMC
                operations. Achieving 0.005mm tolerance with 25+ years of manufacturing expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => setIsQuoteFormOpen(true)}
                >
                  Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Capabilities
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/industrial-cnc-machining-center-with-metal-parts.jpg"
                alt="Industrial CNC machining center with precision metal parts"
                className="rounded-lg shadow-2xl w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive machining solutions with 0.005mm tolerance precision and 25+ years of expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-border bg-card hover:bg-card/80 transition-colors">
              <CardContent className="p-8">
                <Cog className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">CNC Turning Centers</h3>
                <p className="text-muted-foreground mb-4">
                  High-precision turning operations for complex cylindrical components with exceptional accuracy.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    0.005mm tolerance
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Complex geometries
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:bg-card/80 transition-colors">
              <CardContent className="p-8">
                <Settings className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Turn Mills</h3>
                <p className="text-muted-foreground mb-4">
                  Combined turning and milling operations in a single setup for enhanced efficiency and precision.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Multi-axis capability
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Reduced setup time
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:bg-card/80 transition-colors">
              <CardContent className="p-8">
                <Wrench className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Vertical Machining Centers</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced 4-axis vertical machining centers for complex milling operations and intricate parts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    4-axis simultaneous
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    0.005mm precision
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:bg-card/80 transition-colors">
              <CardContent className="p-8">
                <Cog className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Rod Cutting</h3>
                <p className="text-muted-foreground mb-4">
                  Precision rod cutting services using advanced bandsaw technology for material preparation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Upto 250 mm Diameter
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    Various materials
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                25+ Years of Precision Engineering
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Sri Automation brings over 25 years of expertise in precision machining, specializing in CNC turning
                centers, turn mills, and 4-axis VMC operations. We consistently deliver 0.005mm tolerance precision
                across all our manufacturing processes.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">25+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">0.005mm</h3>
                  <p className="text-muted-foreground">Tolerance Precision</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">4-Axis</h3>
                  <p className="text-muted-foreground">VMC Capability</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">2</h3>
                  <p className="text-muted-foreground">Manufacturing Units</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/precision-machined-metal-parts-and-components.jpg"
                alt="Precision machined metal parts and components showcasing quality"
                className="rounded-lg shadow-xl w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Technical Capabilities</h2>
            <p className="text-xl text-muted-foreground">
              State-of-the-art CNC and VMC equipment with precision engineering expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">4</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Axis VMC</h3>
              <p className="text-sm text-muted-foreground">Advanced 4-axis vertical machining centers</p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xs font-bold text-accent">0.005mm</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Precision</h3>
              <p className="text-sm text-muted-foreground">Consistent 0.005mm tolerance across all operations</p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-sm font-bold text-accent">25+</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Experience</h3>
              <p className="text-sm text-muted-foreground">Over 25 years of manufacturing expertise</p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-sm font-bold text-accent">CNC</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Turn Mills</h3>
              <p className="text-sm text-muted-foreground">Advanced turning and milling combinations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground">
              Contact Sri Automation today for precision machining solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card text-center">
              <CardContent className="p-8">
                <Phone className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <div>
                    <a href="tel:+919952513590" className="hover:text-accent transition-colors">
                      +91 9952513590
                    </a>
                  </div>
                  <div>
                    <a href="tel:+919952513590" className="hover:text-accent transition-colors">
                      +91 9791877614
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card text-center">
              <CardContent className="p-8">
                <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <div>
                    <a href="mailto:sriautomation46@gmail.com" className="hover:text-accent transition-colors">
                      sriautomation46@gmail.com
                    </a>
                  </div>
                  <div>
                    <a href="mailto:vijay_sriauto@yahoo.com" className="hover:text-accent transition-colors">
                      vijay_sriauto@yahoo.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card text-center">
              <CardContent className="p-8">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Locations</h3>
                <div className="text-muted-foreground text-xs space-y-3">
                  <div>
                    <div className="font-medium text-foreground mb-1">Unit 1:</div>
                    <div>1/139E, Parvathy Puram</div>
                    <div>Kattampatty, S.S Kulam</div>
                    <div>Coimbatore 641107</div>
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Unit 2:</div>
                    <div>5/127/C7, Subam Nagar</div>
                    <div>Subaganesh Industrial Estate</div>
                    <div>Kattampatty, S.S Kulam P.O</div>
                    <div>Coimbatore 641107</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setIsQuoteFormOpen(true)}
            >
              Request Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Settings className="h-6 w-6 text-accent" />
                <span className="font-bold text-foreground">Sri Automation</span>
              </div>
              <p className="text-muted-foreground text-sm">
                <br />
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>CNC Turning Centers</li>
                <li>Turn Mill Centers</li>
                <li>Vertical Machining Centers </li>
                <li>Rod Cutting</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Industries</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Automotive</li>
                <li>
                  <br />
                </li>
                <li>
                  <br />
                </li>
                <li>
                  <br />
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+91 9952513590</li>
                <li>sriautomation46@gmail.com</li>
                <li>vijay_sriauto@yahoo.com</li>
                <li>Coimbatore, Tamil Nadu</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Sri Automation. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
    </div>
  )
}
