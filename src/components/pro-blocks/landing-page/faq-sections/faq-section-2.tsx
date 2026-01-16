import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FaqSection2() {
  return (
    <section
      className="bg-background section-padding-y border-b"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="section-title-gap-lg flex flex-1 flex-col">
            {/* Category Tag */}
            <Tagline>FAQ</Tagline>
            {/* Main Title */}
            <h1 id="faq-heading" className="heading-lg text-foreground">
              Ответы на частые вопросы
            </h1>
            {/* Section Description */}
            <p className="text-muted-foreground">
              Мы собрали самую важную информацию, чтобы помочь вам получить
              максимум от сервиса. Не нашли ответ?{" "}
              <a href="#" className="text-primary underline">
                Напишите нам.
              </a>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-8">
            {/* General FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                Общие вопросы
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="Общие вопросы FAQ"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    Как TaskFlow помогает управлять проектами?
                  </AccordionTrigger>
                  <AccordionContent>
                    TaskFlow предоставляет визуальные канбан-доски, автоматизированные
                    процессы и ИИ-приоритизацию для эффективной организации задач.
                    Вы можете создавать проекты, назначать задачи участникам,
                    устанавливать дедлайны и отслеживать прогресс в одном месте.
                    Умные уведомления гарантируют, что ничего не потеряется.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Можно ли интегрировать TaskFlow с другими инструментами?
                  </AccordionTrigger>
                  <AccordionContent>
                    Да! TaskFlow интегрируется с популярными сервисами: Slack,
                    Microsoft Teams, Google Workspace, GitHub, Jira и многими другими.
                    Наш API позволяет создавать кастомные интеграции для корпоративных нужд.
                    Настройте двустороннюю синхронизацию для автоматического обновления данных.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Как работает ИИ-приоритизация?
                  </AccordionTrigger>
                  <AccordionContent>
                    Наш ИИ анализирует дедлайны, зависимости, нагрузку команды
                    и историю выполнения задач, чтобы предложить оптимальный порядок.
                    Со временем он учится на рабочих процессах вашей команды и даёт
                    всё более точные рекомендации. Финальное решение всегда за вами.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Безопасны ли мои данные в TaskFlow?
                  </AccordionTrigger>
                  <AccordionContent>
                    Безопасность — наш главный приоритет. TaskFlow использует
                    корпоративное шифрование (AES-256) для хранения данных и TLS 1.3
                    для передачи. Мы сертифицированы по SOC 2 Type II и соответствуем GDPR.
                    Также доступны SSO и двухфакторная аутентификация для
                    дополнительной защиты.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Billing FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                Оплата
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="Вопросы об оплате"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="billing-1">
                  <AccordionTrigger className="text-left">
                    Как работает бесплатный тариф?
                  </AccordionTrigger>
                  <AccordionContent>
                    Бесплатный тариф включает до 3 проектов, 10 участников
                    и базовые функции: канбан-доски и простую отчётность.
                    Вы можете перейти на платный тариф в любое время для
                    безлимитных проектов, расширенной аналитики и премиум-интеграций.
                    Карта для начала не нужна.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="billing-2">
                  <AccordionTrigger className="text-left">
                    Можно ли сменить тариф в любое время?
                  </AccordionTrigger>
                  <AccordionContent>
                    Да, вы можете повысить, понизить или отменить тариф в любое время.
                    Изменения вступают в силу сразу, а оплата пересчитывается пропорционально.
                    При понижении тарифа доступ к премиум-функциям сохраняется до конца
                    текущего периода. Никаких долгосрочных контрактов и штрафов за отмену.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="billing-3">
                  <AccordionTrigger className="text-left">
                    Есть ли скидка при годовой оплате?
                  </AccordionTrigger>
                  <AccordionContent>
                    Да! Мы даём скидку 20% при выборе годовой оплаты.
                    Это распространяется на все платные тарифы и позволяет
                    существенно сэкономить. Годовые тарифы оплачиваются сразу
                    и автоматически продлеваются. Вы можете сменить тариф
                    в течение года.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="billing-4">
                  <AccordionTrigger className="text-left">
                    Какие способы оплаты вы принимаете?
                  </AccordionTrigger>
                  <AccordionContent>
                    Мы принимаем все основные карты (Visa, Mastercard, МИР),
                    PayPal и банковские переводы для годовых тарифов.
                    Все платежи обрабатываются безопасно через Stripe.
                    Для корпоративных клиентов доступны счета на оплату
                    с отсрочкой 30 дней.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
