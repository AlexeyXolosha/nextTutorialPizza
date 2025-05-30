import {Container, Title, TopBar, Filters} from "@/components/shared";

export default function Home() {
    return <>

        <Container className="mt-10">
            <Title text="Все пиццы" size='lg' className="font-extrabold"></Title>
        </Container>
        <TopBar/>

        <Container className="mt-10 pb-14">
            <div className="flex gap-[60px]">

                {/* Фильтрация */}
                <div className="w-[250px]">
                    <Filters/>
                </div>

                {/* Список товаров */}
                <div className="flex-1">
                    <div className="flex flex-col gap-16">
                        Список товаров
                        {/*<PorudtctGroupList title="Пиццы" items={[1, 2, 3, 4, 5]}/>*/}
                        {/*<PorudtctGroupList title="Комбо" items={[1, 2, 3, 4, 5]}/>*/}
                    </div>
                </div>

            </div>
        </Container>
    </>
}
