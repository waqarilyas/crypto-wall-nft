import React, { useEffect } from "react";

function Layout(props: any) {
  useEffect(() => {
    ChangeTitle(props?.name);
  });
  const ChangeTitle = (name: string) => {
    document.title = ` ${name} | DigiDrip `;
  };

  return (
    <div style={{ minHeight: "calc(100vh - 400px)" }}>
      {" "}
      <props.component {...props} />
    </div>
  );
}

export default Layout;
