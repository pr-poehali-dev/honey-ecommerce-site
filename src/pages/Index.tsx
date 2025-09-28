import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Icon from '@/components/ui/icon'

const honeyProducts = [
  {
    id: 1,
    name: 'Липовый мёд',
    price: '750 руб/кг',
    description: 'Нежный светлый мёд с тонким ароматом липового цвета. Обладает успокаивающими свойствами.',
    properties: ['Успокаивающий', 'Против простуды', 'Для сна'],
    image: '/img/2396dc66-baa9-4a9d-b59e-6b708f7403d7.jpg'
  },
  {
    id: 2,
    name: 'Гречишный мёд',
    price: '850 руб/кг',
    description: 'Тёмный мёд с насыщенным вкусом и богатым содержанием железа и белка.',
    properties: ['Богат железом', 'Для иммунитета', 'Тонизирующий'],
    image: '/img/2396dc66-baa9-4a9d-b59e-6b708f7403d7.jpg'
  },
  {
    id: 3,
    name: 'Акациевый мёд',
    price: '900 руб/кг',
    description: 'Прозрачный мёд с деликатным вкусом. Долго не кристаллизуется, подходит для диабетиков.',
    properties: ['Гипоаллергенный', 'Для детей', 'Долго жидкий'],
    image: '/img/2396dc66-baa9-4a9d-b59e-6b708f7403d7.jpg'
  },
  {
    id: 4,
    name: 'Цветочный мёд',
    price: '700 руб/кг',
    description: 'Мёд из разнотравья с богатым букетом ароматов луговых цветов.',
    properties: ['Витаминный', 'Общеукрепляющий', 'Натуральный'],
    image: '/img/2396dc66-baa9-4a9d-b59e-6b708f7403d7.jpg'
  }
]

const testimonials = [
  {
    name: 'Елена Иванова',
    text: 'Покупаю мёд у этой пасеки уже третий год. Качество всегда на высоте!',
    rating: 5
  },
  {
    name: 'Михаил Петров',
    text: 'Липовый мёд помог справиться с простудой. Очень вкусный и натуральный.',
    rating: 5
  },
  {
    name: 'Анна Сидорова',
    text: 'Заказываю для всей семьи. Дети обожают, а я спокойна за качество.',
    rating: 5
  }
]

const Index = () => {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Навигация */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Hexagon" className="text-accent" size={32} />
              <h1 className="text-2xl font-bold text-primary">Пасека "Золотые соты"</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'catalog', label: 'Каталог' },
                { id: 'about', label: 'О пасеке' },
                { id: 'delivery', label: 'Доставка' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === item.id ? 'text-accent' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Главная секция */}
      <section 
        id="home" 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/c4312654-fc2a-4a94-b582-8eadb254b75d.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-5xl font-bold mb-6 text-shadow">
                Натуральный мёд<br />прямо с пасеки
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Собираем мёд с любовью уже 25 лет. Каждая банка — это кусочек природы и забота о вашем здоровье.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-primary font-semibold"
                  onClick={() => scrollToSection('catalog')}
                >
                  Посмотреть каталог
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => scrollToSection('about')}
                >
                  О нашей пасеке
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/d8f71003-4b61-4dbf-b811-42db17595d41.jpg"
                alt="Пчела на цветке"
                className="rounded-2xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Каталог товаров */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Каталог мёда</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите идеальный сорт мёда для вашей семьи. Каждый вид обладает уникальными вкусовыми и полезными свойствами.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {honeyProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover-scale border border-border">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <p className="text-2xl font-bold text-accent">{product.price}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.properties.map((property) => (
                      <Badge key={property} variant="secondary" className="text-xs">
                        {property}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-primary">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* О пасеке */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">О нашей пасеке</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Наша семейная пасека работает уже более 25 лет в экологически чистом районе 
                  Тульской области. Мы следуем традиционным методам пчеловодства, передаваемым 
                  из поколения в поколение.
                </p>
                <p>
                  У нас более 200 пчелиных семей, которые собирают нектар с лугов, лесов и 
                  полей, удалённых от промышленных зон. Это гарантирует исключительную чистоту 
                  и качество нашего мёда.
                </p>
                <p>
                  Мы не используем химические добавки и искусственную подкормку. Наш мёд проходит 
                  минимальную обработку, сохраняя все природные витамины и микроэлементы.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">25+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">200+</div>
                  <div className="text-sm text-muted-foreground">пчелиных семей</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">натуральный</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/img/c7f26f09-da1d-4e7e-9af5-01ea19e7a157.jpg"
                alt="Пчеловод за работой"
                className="rounded-2xl shadow-lg hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Доставка и оплата */}
      <section id="delivery" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Доставка и оплата</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Способы доставки</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Icon name="Truck" className="text-accent mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold">Курьерская доставка</h4>
                    <p className="text-muted-foreground">По Москве и МО — 300 руб. Доставка в день заказа.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Package" className="text-accent mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold">Почта России</h4>
                    <p className="text-muted-foreground">По всей России — от 400 руб. Сроки 3-10 дней.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" className="text-accent mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold">Самовывоз</h4>
                    <p className="text-muted-foreground">С пасеки бесплатно. Тульская область, д. Медовая.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Способы оплаты</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Icon name="CreditCard" className="text-accent mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold">Банковская карта</h4>
                    <p className="text-muted-foreground">Visa, MasterCard, МИР. Безопасная оплата онлайн.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Banknote" className="text-accent mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold">Наличными</h4>
                    <p className="text-muted-foreground">При получении курьером или самовывозе.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Smartphone" className="text-accent mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold">СБП / Переводы</h4>
                    <p className="text-muted-foreground">Быстрые переводы через мобильные приложения.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Отзывы покупателей</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" className="text-accent" size={24} />
                  <div>
                    <p className="font-semibold">+7 (985) 123-45-67</p>
                    <p className="text-muted-foreground text-sm">Ежедневно с 9:00 до 20:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" className="text-accent" size={24} />
                  <div>
                    <p className="font-semibold">info@medpaseka.ru</p>
                    <p className="text-muted-foreground text-sm">Ответим в течение часа</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" className="text-accent" size={24} />
                  <div>
                    <p className="font-semibold">Тульская область, д. Медовая</p>
                    <p className="text-muted-foreground text-sm">Самовывоз по предварительной записи</p>
                  </div>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <div>
                <h4 className="font-semibold mb-4 text-primary">Мы в соцсетях</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Youtube" size={20} />
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>Оставить заявку</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Имя</label>
                    <input 
                      type="text" 
                      className="w-full mt-1 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full mt-1 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Сообщение</label>
                    <textarea 
                      className="w-full mt-1 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      rows={4}
                      placeholder="Ваше сообщение..."
                    />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-primary">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Hexagon" className="text-accent" size={24} />
                <h3 className="text-xl font-bold">Пасека "Золотые соты"</h3>
              </div>
              <p className="text-primary-foreground/80">
                Натуральный мёд прямо с пасеки. Качество, проверенное временем.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2 text-sm">
                <button 
                  onClick={() => scrollToSection('catalog')}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Каталог мёда
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  О пасеке
                </button>
                <button 
                  onClick={() => scrollToSection('delivery')}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Доставка
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p>+7 (985) 123-45-67</p>
                <p>info@medpaseka.ru</p>
                <p>Тульская область, д. Медовая</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-primary-foreground/20" />
          <div className="text-center text-sm text-primary-foreground/60">
            © 2024 Пасека "Золотые соты". Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index