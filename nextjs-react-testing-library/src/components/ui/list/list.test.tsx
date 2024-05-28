import {fireEvent, render, screen} from "@testing-library/react";
import List from "./index";

describe("Title component", () => {

    beforeEach(() => {
        render(
            <List listData={[
                {
                    title: 'Color style',
                    style: {
                        color: 'turquoise'
                    }
                },
                {
                    title: 'Position style'
                }
            ]}/>
        )
    })

    test("render list", async () => {


        const data = await screen.findByText(/Color/i)

        expect(data).toBeInTheDocument()
        expect(data).toHaveStyle({
            color: 'turquoise'
        })
    })

    test("toggle element", () => {

        const toggleBtn = screen.getByTestId('toggle-btn');

        expect(screen.queryByTestId('toggle-elem')).toBeNull()

        fireEvent.click(toggleBtn)

        expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
    })


})
