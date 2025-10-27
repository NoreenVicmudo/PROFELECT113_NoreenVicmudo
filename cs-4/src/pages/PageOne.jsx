export default function PageOne({ firstname, lastname }) {
  const ClickButton = () => {
    alert("testing");
  };

  return (
    <>
      <div onClick={ClickButton}>
        THIS IS PAGE ONE {firstname} {lastname}
      </div>
    </>
  );
}

//export default PageOne;

//onclick
//onchange
//onsubmit
