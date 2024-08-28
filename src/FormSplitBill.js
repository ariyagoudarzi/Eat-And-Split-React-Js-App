import { useState } from "react";
import { Button } from "./App";

export function FormSplitBill({
  selectedFriend,
  onSplitBill,
  onSelectedFriend,
}) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  let paidByFriend = bill ? bill - paidByUser : "";
  const [whoPayingBill, setWhoPayingBill] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoPayingBill === "user" ? paidByFriend : -paidByUser);
    handleReseat();
  }

  function handleReseat() {
    setBill("");
    setPaidByUser("");
    paidByFriend = "";
    setWhoPayingBill("user");
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <div
        onClick={() => onSelectedFriend(null)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row-reverse",
        }}
      >
        <lord-icon
          src="https://cdn.lordicon.com/zxvuvcnc.json"
          trigger="hover"
          state="hover-cross-2"
          colors="primary:#495057"
          style={{ width: "30px", height: "30px", cursor: "pointer" }}
        ></lord-icon>
        <h2>Split a bill with {selectedFriend.name}</h2>
      </div>
      <section>
        <label>
          <lord-icon
            src="https://cdn.lordicon.com/jtiihjyw.json"
            trigger="loop"
            stroke="light"
            state="loop-spin"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
          Bill Value
        </label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </section>
      <section>
        <label>
          <lord-icon
            src="https://cdn.lordicon.com/mebvgwrs.json"
            trigger="hover"
            stroke="light"
            state="hover-nodding"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
          Your Expense
        </label>
        <input
          type="text"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value)
          }
        />
      </section>
      <section>
        <label>
          <lord-icon
            src="https://cdn.lordicon.com/pyarizrk.json"
            trigger="hover"
            stroke="light"
            state="hover-wave"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
          {selectedFriend.name}'s Expense
        </label>
        <input type="text" value={paidByFriend} disabled />
      </section>
      <section>
        <label>
          <lord-icon
            src="https://cdn.lordicon.com/lxizbtuq.json"
            trigger="morph"
            stroke="light"
            state="morph-coins"
            style={{ width: "32px", height: "32px", margin: "0 10px 0 0" }}
          ></lord-icon>
          Who is paying the bill?
        </label>
        <select
          style={{ cursor: "pointer" }}
          value={whoPayingBill}
          onChange={(e) => setWhoPayingBill(e.target.value)}
        >
          <option value={"user"}>You</option>
          <option value={"friend"}>{selectedFriend.name}</option>
        </select>
      </section>

      <section style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={handleReseat}>Reseat</Button>
        <Button>Split Bill</Button>
      </section>
    </form>
  );
}
