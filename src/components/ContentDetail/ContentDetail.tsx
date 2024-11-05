import { SetStateAction, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Generated from "../mockData/Generated.json";
import { User } from "../mockData/type.tsx";
import "./ContentDetail.scss";

function ContentDetail() {
  const { id } = useParams(); // id is a string from useParams
  const [user, setUser] = useState<User | null>(null);
  const [activeSection, setActiveSection] = useState("general");

  useEffect(() => {
    // Convert id to number
    const userId = Number(id);

    // Check local storage for user data
    const storedUser = localStorage.getItem(`user-${userId}`);

    console.log("Stored user in localStorage:", storedUser);

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Find the user in the Generated data
      const foundUser = Generated.find((user) => user.id === userId);

      if (foundUser) {
        setUser(foundUser);
        // Store user data in local storage
        localStorage.setItem(`user-${userId}`, JSON.stringify(foundUser));
      }
    }
  }, [id]);

  if (!user) {
    return (
      <div className="content-body">
        <div className="container">
          <p className="">User not found</p>
        </div>
      </div>
    );
  }

  const itemsT = [
    { id: 1, title: "Full Name", content: user.username },
    { id: 2, title: "Phone Number", content: user.phone },
    { id: 3, title: "Email Address", content: user.email },
    { id: 4, title: "Bvn", content: user.bvn },
    { id: 5, title: "Gender", content: user.gender },
    { id: 6, title: "Marital Status", content: user.marital_status },
    { id: 7, title: "Children", content: user.children },
    { id: 8, title: "Type of residence", content: user.type_of_residence },
  ];

  const itemsT1 = [
    { id: 1, title: "Level of education", content: user.level_of_education },
    { id: 2, title: "Employment status", content: user.employment_status },
    {
      id: 3,
      title: "Sector of employment",
      content: user.sector_of_employment,
    },
    {
      id: 4,
      title: "Duration of employment",
      content: user.duration_of_employment,
    },
    { id: 5, title: "Office email", content: user.email },
    { id: 6, title: "Monthly income", content: user.monthly_income },
    { id: 7, title: "Loan repayment", content: user.loan_repayment },
  ];

  const itemsT2 = [
    { id: 1, title: "Twitter", content: user.twitter },
    { id: 2, title: "Facebook", content: user.facebook },
    { id: 3, title: "Instagram", content: user.instagram },
  ];

  const itemsT3 = [
    {
      id: 1,
      title: "Full Name",
      content: `${user.guarantor.first_name} ${user.guarantor.last_name}`,
    },
    { id: 2, title: "Phone number", content: user.guarantor.number },
    { id: 3, title: "Email Address", content: user.guarantor.email },
    { id: 4, title: "Relationship", content: user.guarantor.relationship },
  ];

  const docs = [
    { id: 1, title: "User id", content: user.id },
    { id: 2, title: "Document", content: "Original" },
  ];

  const banks = [
    { id: 1, title: "Name of bank", content: user.bank_name },
    { id: 2, title: "Bvn", content: user.bvn },
    { id: 3, title: "Account Balance", content: user.balance },
  ];

  const loans1 = [
    { id: 1, title: "Monthly income", content: user.monthly_income },
    { id: 2, title: "Loan repayment", content: user.loan_repayment },
  ];

  const handleSectionChange = (section: SetStateAction<string>) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="content-body">
        <div className="container">
          <Link to="/userfilter" className="back-button">
            <img src="/back_icon.png" alt="" />
            back to user
          </Link>
          <div className="flex-t">
            <p className="user-p">User Details</p>
            <div className="bttt">
              <button className="bttn-1">Blacklist User</button>
              <button className="bttn-2">Activate User</button>
            </div>
          </div>

          <div className="conT">
            <div className="t-record">
              <div className="txt sll first">
                <img
                  className="imgPro"
                  src={user.img_path || "/default_image.png"}
                  alt="User Profile"
                />
                <div className="inner-txt">
                  <h2>{user.username}</h2>
                  <p>{user.id}</p>
                </div>
              </div>
              <div className="txt sll" style={{ textAlign: "center" }}>
                <p>User's Tier</p>
                <div className="start-im" style={{ marginTop: "10px" }}>
                  <img src="/np_star_1208084_000000 1.png" alt="" />
                  <img src="/np_star_1171151_000000 1.png" alt="" />
                  <img src="/np_star_1171151_000000 1.png" alt="" />
                </div>
              </div>
              <div className="txt">
                <h2>{user.balance}</h2>
                <p>
                  <span className="bvn-de">{user.bvn}</span> /{" "}
                  <span className="bank-name">{user.bank_name}</span>{" "}
                </p>
              </div>
            </div>

            <div className="nx-details">
              <button
                className={activeSection === "general" ? "active" : ""}
                onClick={() => handleSectionChange("general")}>
                General
              </button>
              <button
                className={activeSection === "document" ? "active" : ""}
                onClick={() => handleSectionChange("document")}>
                Documents
              </button>
              <button
                className={activeSection === "bank_detail" ? "active" : ""}
                onClick={() => handleSectionChange("bank_detail")}>
                Bank Details
              </button>
              <button
                className={activeSection === "loan" ? "active" : ""}
                onClick={() => handleSectionChange("loan")}>
                Loans
              </button>
              <button
                className={activeSection === "saving" ? "active" : ""}
                onClick={() => handleSectionChange("saving")}>
                Savings
              </button>
              <button
                className={activeSection === "lystem" ? "active" : ""}
                onClick={() => handleSectionChange("lystem")}>
                App and System
              </button>
            </div>
          </div>

          {/* Sections */}
          <div
            className={`conT ${activeSection === "general" ? "" : "hidden"}`}
            id="general">
            <div className="sectt">
              <p className="p-bold">Personal</p>
              <div className="details-sec">
                {itemsT.map((item) => (
                  <div key={item.id} className="det-inner">
                    <p className="p-small">{item.title}</p>
                    <p className="p-bold">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="sectt">
              <p className="p-bold">Education and Employment</p>
              <div className="details-sec">
                {itemsT1.map((item) => (
                  <div key={item.id} className="det-inner">
                    <p className="p-small">{item.title}</p>
                    <p className="p-bold">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="sectt">
              <p className="p-bold">Socials</p>
              <div className="details-sec">
                {itemsT2.map((item) => (
                  <div key={item.id} className="det-inner">
                    <p className="p-small">{item.title}</p>
                    <p className="p-bold">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="sectt">
              <p className="p-bold">Guarantor</p>
              <div className="details-sec">
                {itemsT3.map((item) => (
                  <div key={item.id} className="det-inner">
                    <p className="p-small">{item.title}</p>
                    <p className="p-bold">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`conT ${activeSection === "document" ? "" : "hidden"}`}
            id="document">
            <div className="sectt">
              <p className="p-bold">Documents Details</p>
              <div className="details-sec">
                {docs.map((doc) => (
                  <div key={doc.id} className="det-inner">
                    <p className="p-small">{doc.title}</p>
                    <p className="p-bold">{doc.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`conT ${
              activeSection === "bank_detail" ? "" : "hidden"
            }`}
            id="bank_detail">
            <div className="sectt">
              <p className="p-bold">Bank Details</p>
              <div className="details-sec">
                {banks.map((bank1) => (
                  <div key={bank1.id} className="det-inner">
                    <p className="p-small">{bank1.title}</p>
                    <p className="p-bold">{bank1.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`conT ${activeSection === "loan" ? "" : "hidden"}`}
            id="loan">
            <div className="sectt">
              <p className="p-bold">Loan Details</p>
              <div className="details-sec">
                {loans1.map((loan1) => (
                  <div key={loan1.id} className="det-inner">
                    <p className="p-small">{loan1.title}</p>
                    <p className="p-bold">{loan1.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`conT ${activeSection === "saving" ? "" : "hidden"}`}
            id="saving">
            <div className="sectt">
              <p className="p-bold">Saving Details</p>
              <div className="details-sec">
                <div className="det-inner">
                  <p className="p-small">Savings</p>
                  <p className="p-bold">No Savings</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`conT ${activeSection === "lystem" ? "" : "hidden"}`}
            id="system">
            <div className="sectt">
              <p className="p-bold">App and System Details</p>
              <div className="details-sec">
                <div className="det-inner">
                  <p className="p-small">App</p>
                  <p className="p-bold">Mobile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentDetail;
