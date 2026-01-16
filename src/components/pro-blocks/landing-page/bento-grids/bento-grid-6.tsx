import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function BentoGrid6() {
  return (
    <section className="bg-background section-padding-y border-b" id="features">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          {/* Tagline */}
          <Tagline>Возможности</Tagline>
          {/* Main Heading */}
          <h2 className="heading-lg">
            Организуйте, приоритизируйте и сдавайте уверенно
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-3 md:gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {/* Wide Feature Card - Top Left */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-2">
            <img
              src="/ai-meeting-notes.png"
              alt="Kanban Board"
              className="hidden h-auto w-full object-cover md:block md:h-[332px]"
            />
            <img
              src="/ai-meeting-notes_mobile.png"
              alt="Kanban Board"
              className="block h-auto w-full md:hidden"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Канбан-доски
              </h3>
              <p className="text-muted-foreground">
                Перетаскивайте задачи между настраиваемыми этапами
              </p>
            </CardContent>
          </Card>
          {/* Regular Feature Card - Top Right */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-1">
            <img
              src="/universal-search.png"
              alt="Умный поиск"
              className="h-auto w-full object-cover md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Умный поиск
              </h3>
              <p className="text-muted-foreground">
                Находите любую задачу, проект или комментарий мгновенно
              </p>
            </CardContent>
          </Card>
          {/* Regular Feature Card - Bottom Left */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-1">
            <img
              src="/smart-tags.png"
              alt="Теги приоритетов"
              className="h-auto w-full object-cover md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Теги приоритетов
              </h3>
              <p className="text-muted-foreground">
                Помечайте задачи по срочности, команде или своим категориям
              </p>
            </CardContent>
          </Card>
          {/* Wide Feature Card - Bottom Right */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-2">
            <img
              src="/team-insights.png"
              alt="Дашборд команды"
              className="hidden h-[332px] w-full object-cover md:block"
            />
            <img
              src="/team-insights_mobile.png"
              alt="Дашборд команды"
              className="block h-auto w-full object-cover md:hidden md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Дашборд команды
              </h3>
              <p className="text-muted-foreground">
                Распределение нагрузки и аналитика продуктивности на одном экране
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
