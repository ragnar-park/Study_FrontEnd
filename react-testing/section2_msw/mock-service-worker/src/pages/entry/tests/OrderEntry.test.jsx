import {render, screen, waitFor} from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../mocks/server";

test("handles error for scoops and toppings routes", async () => {

    // 핸들러 오버라이드
    //서버에 관한 엔드포인트가 있는 모든 핸들러를 재설정
    server.resetHandlers(
        rest.get("http://localhost:3030/scoops", (req, res, ctx) =>
            res(ctx.status(500))
        ),
        rest.get("http://localhost:3030/toppings", (req, res, ctx) =>
            res(ctx.status(500))
        )
    );

    render(<OrderEntry />);

    // Many not see error
    // 컴퓨터의 속도에 따라 나타날 수도 그렇지 않을 수도 있다.
    // 오류가 표시될지 말지를 결정하는 건 경합 조건이다
    // 둘중 무엇이 먼저 실행되느냐에 따라 결과가 달라짐
    // 단언문이 실행되기 전 두 네트워크 호출 모두 반환되면 단언문이 alert를 확인할 수 있기 때문에 오류가 표시 되지 않음
        // - 두 네트워크 호추이 다 반환 됐기때문
    // 하지만 두 네트워크 호출 충 하나만 반환되었을 때 단어문이 실행되면 오류 발생 (toHaveLength에서 2개로 단언했기 때문)
    await waitFor(async () => {
        const alerts = await screen.findAllByRole("alert");

        expect(alerts).toHaveLength(2);
   });

});

// test.skip('not a real test', () => {});
