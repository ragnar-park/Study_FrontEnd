import { render, screen } from "@testing-library/react";

import Options from '../Options';

test('display image for each scoop option from server', async() => {
    render(<Options optionType="scoops" /> );

    // 이미지 찾기
    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // 이미지의 alt text 확인
    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop'])
});

test('Display image for each toppings option from server', async () => {

    render(<Options optionType="toppings" />);

    const images = await screen.findAllByRole('img', { name: /topping$/i });
    expect(images).toHaveLength(3);

    const imageTitles = images.map((img) => img.alt);
    expect(imageTitles).toStrictEqual([
       'Cherries topping',
       'M&Ms topping',
       'Hot fudge topping',
    ]);
});
