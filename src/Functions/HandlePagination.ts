import {NextRouter} from "next/router";
import {ChangeEvent} from "react";

const handlePagination = (e : ChangeEvent < unknown >, router : NextRouter) => {
    const target = e.target as HTMLButtonElement

    let page = Number(target.textContent)

    page = page - 1
    router.replace({
        query: {
            ...router
                ?.query,
            page
        }
    });
}
export default handlePagination