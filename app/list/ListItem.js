"use client";

import axios from "axios";
import Link from "next/link";
import React from "react";

export default function ListItem({ result }) {
    console.log(result);

    const ajaxDel = (e) => {
        console.log(e._id);
        fetch("/api/post/del", {
            method: "DELETE",
            body: e._id,
        });
    };

    return (
        <div>
            {result.map((e) => (
                <div className="list-item" key={e._id}>
                    <Link href={`/detail/${e._id}`}>
                        <h4>{e.title}</h4>
                    </Link>

                    {/* form 대신 ajax로 서버에 요청 할 수 있음 */}
                    <span
                        onClick={() => {
                            ajaxDel(e);
                        }}
                    >
                        🗑
                    </span>

                    <Link href={`/edit/${e._id}`}>✏️</Link>
                    <p>1월 1일</p>
                    {/* <DetailLink /> */}
                </div>
            ))}
        </div>
    );
}
