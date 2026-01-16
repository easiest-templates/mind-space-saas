import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Check, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { VariantProps } from "class-variance-authority";

const pricingData = {
  plans: [
    {
      name: "Бесплатный",
      description:
        "Идеально для индивидуальных пользователей и небольших команд, начинающих работу с проектами.",
      features: [
        { name: "3 активных проекта", tooltip: "Создавайте до 3 проектов одновременно" },
        {
          name: "Базовые канбан-доски",
          tooltip: "Стандартное управление задачами перетаскиванием",
        },
        { name: "10 участников", tooltip: "Приглашайте до 10 коллег" },
      ],
      price: 0,
      priceDisplay: "0",
      period: "/мес",
      variant: "outline",
    },
    {
      name: "Pro",
      description:
        "Для растущих команд, которым нужны расширенные функции и безлимитные проекты.",
      features: [
        { name: "Безлимитные проекты", tooltip: "Без ограничений на количество проектов" },
        { name: "ИИ-приоритизация", tooltip: "Умные рекомендации по порядку задач" },
        { name: "Расширенная аналитика", tooltip: "Детальные отчёты о продуктивности" },
        { name: "Свои процессы", tooltip: "Создавайте автоматизированные пайплайны" },
        { name: "Приоритетная поддержка", tooltip: "Круглосуточная помощь" },
      ],
      price: 1200,
      priceDisplay: "1 200",
      period: "/пользователь/мес",
      variant: "default",
      highlighted: true,
    },
  ],
};

export function PricingSection3() {
  return (
    <section
      className="bg-secondary section-padding-y border-b"
      aria-labelledby="pricing-section-title-3"
      id="pricing"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          {/* Section Header */}
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            {/* Category Tag */}
            <Tagline>Цены</Tagline>
            {/* Main Title */}
            <h2
              id="pricing-section-title-3"
              className="heading-lg text-foreground"
            >
              Простые тарифы для команд любого размера
            </h2>
          </div>

          {/* Two-Column Side-by-Side Pricing Cards - Stacks on mobile */}
          <div className="flex w-full flex-col items-center gap-4 md:max-w-3xl md:flex-row md:gap-0">
            {pricingData.plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`p-6 shadow-none sm:p-12 md:rounded-tl-xl md:rounded-tr-none md:rounded-br-none md:rounded-bl-xl md:border-r-0 ${
                  plan.highlighted
                    ? "shadow-[0px_0px_0px_6px_rgba(7,46,106,0.05)] md:rounded-xl md:border-r"
                    : ""
                }`}
              >
                {/* Card Content Container */}
                <CardContent className="flex flex-col gap-8 p-0">
                  {/* Plan Header Section */}
                  <div className="flex flex-col gap-6">
                    {/* Plan Title and Description Block */}
                    <div className="relative flex flex-col gap-3">
                      <h3
                        className={`text-lg font-semibold ${
                          plan.highlighted ? "text-primary" : ""
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price Display with Currency and Period */}
                    <div className="flex items-end gap-0.5">
                      <span className="text-4xl font-semibold">
                        {plan.priceDisplay} ₽
                      </span>
                      <span className="text-muted-foreground text-base">
                        {pricingData.plans[index].period ?? "/мес"}
                      </span>
                    </div>

                    {/* Call-to-Action Button */}
                    <Button
                      variant={
                        plan.variant as VariantProps<
                          typeof buttonVariants
                        >["variant"]
                      }
                      className="w-full"
                    >
                      {plan.price === 0 ? "Начать бесплатно" : "Пробный период"}
                    </Button>
                  </div>

                  {/* Features List Section */}
                  <div className="flex flex-col gap-4">
                    {/* Features Header with Plan Inheritance */}
                    <p className="text-sm font-medium">
                      {index === 0
                        ? "Что включено:"
                        : `Всё из тарифа ${
                            pricingData.plans[index - 1].name
                          }, плюс:`}
                    </p>
                    {/* Features Grid with Tooltips */}
                    <div className="flex flex-col gap-4">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Check className="text-primary h-5 w-5" />
                          <span className="text-muted-foreground flex-1 text-sm">
                            {feature.name}
                          </span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="text-muted-foreground h-4 w-4 cursor-pointer opacity-70 hover:opacity-100" />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p>{feature.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
