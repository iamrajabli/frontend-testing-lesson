import {render, screen} from "@testing-library/react";
import Title from "./";

describe("Title component", () => {
    beforeAll(() => {
        render(
            <Title>
                Hello world
            </Title>
        )
    })
    test("render title", () => {

        const title = screen.getByText(/hello world/i)

        expect(title).toBeInTheDocument()
        expect(title).toMatchSnapshot()
    })


    test("queryBy testing", () => {
        const title = screen.queryByText(/something/i)

        expect(title).toBeNull()
    })

})
