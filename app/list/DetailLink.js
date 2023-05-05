"use client";

import {
    usePathname,
    useRouter,
    useSearchParams,
} from "next/navigation";

export default function DetailLink() {
    const router = useRouter();

    return (
        <button
            onClick={() => {
                router.push("/");
            }}
        >
            버튼
        </button>
    );
}
