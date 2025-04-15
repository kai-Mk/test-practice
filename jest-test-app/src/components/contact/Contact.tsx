import React from "react";

const Contact = () => {
    return (
        <>
            <h1>お問い合わせフォーム</h1>
            <p>すべてのフィールドは必須項目です</p>

            <form action="">
                <div>
                    <label htmlFor="name">お名前</label>
                    <input type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="email">メールアドレス</label>
                    <input type="email" id="email" />
                </div>

                <div>
                    <label htmlFor="question">お問い合わせ内容</label>
                    <select name="" id="question">
                        <option value="">
                            お問い合わせ内容を選択してください
                        </option>
                        <option value="dev">開発案件の相談</option>
                        <option value="video">撮影の相談</option>
                        <option value="sns-marketing">SNSマーケの相談</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="">
                        <input type="checkbox" id="terms" />
                        利用規約に同意します
                    </label>
                </div>
                <button>送信</button>
            </form>
        </>
    );
};

export default Contact;
