const renderTitle = (name, container) => {
  container.innerHTML = name;
};

const renderDescription = (description, container) => {
  description.forEach((description) => {
    const p = document.createElement("p");
    p.innerText = description;
    container.appendChild(p);
  });
};

const renderImages = (images, container, type) => {
  images.forEach((src) => {
    const img = document.createElement("img");
    img.classList.add("project-img1");
    if (type === "mobile-app") img.classList.add("mobile");
    img.src = src;
    img.alt = "img du projet";
    container.appendChild(img);
  });
};

const renderFunctionalities = (functionalities, container) => {
  const ul = document.createElement("ul");
  const h3 = document.createElement("h3");
  h3.innerText = "Fonctionnalités\n\n";

  functionalities.forEach((functionality) => {
    const li = document.createElement("li");
    li.innerText = functionality;
    ul.appendChild(li);
  });
  container.appendChild(h3);
  container.appendChild(ul);
};

const renderTechnicalStack = (technicalStack, container) => {
  const { client, server } = technicalStack;
  const client_ul = document.createElement("ul");
  const server_ul = document.createElement("ul");
  const stack_h3 = document.createElement("h3");
  stack_h3.innerText = "Stack technique";

  if (client.length) {
    const h4_client_title = document.createElement("h4");
    h4_client_title.innerHTML = "<br/>Client<br/>";
    h4_client_title.style.textDecoration = "underline";
    client_ul.appendChild(h4_client_title);
    client.forEach((stack) => {
      const li = document.createElement("li");
      li.innerText = stack;
      client_ul.appendChild(li);
    });
  }

  if (server.length) {
    const h4_server_title = document.createElement("h4");
    h4_server_title.innerHTML = "<br/>Server<br/>";
    h4_server_title.style.textDecoration = "underline";
    server_ul.appendChild(h4_server_title);
    server.forEach((stack) => {
      const li = document.createElement("li");
      li.innerText = stack;
      server_ul.appendChild(li);
    });
  }

  container.appendChild(stack_h3);
  container.appendChild(client_ul);
  container.appendChild(server_ul);
};

const renderLink = (links, container) => {
  const h3 = document.createElement("h3");
  h3.innerHTML = "Liens<br/><br/>";
  container.appendChild(h3);
  for (let element in links) {
    if (links[element] !== "") {
      const p = document.createElement("p");
      p.innerHTML =
        element === "github"
          ? `Vers le code source <a href=${links[element]} target="_blank">github</a>`
          : `Accéder au <a href=${links[element]} target="_blank">contenu</a>`;
      container.appendChild(p);
    }
  }
};

export const renderProjects = (projects, container, elements) => {
  projects.forEach((project) => {
    const {
      id,
      name,
      description,
      images,
      functionalities,
      technicalStack,
      links,
      type,
    } = project;
    const projectNode = document.querySelector("." + id);

    if (projectNode) {
      projectNode.addEventListener("click", () => {
        container.scroll(0, 0);
        name && renderTitle(name, elements.name);
        description && renderDescription(description, elements.description);
        images && renderImages(images, elements.images, type);
        functionalities &&
          renderFunctionalities(functionalities, elements.functionalities);
        technicalStack &&
          renderTechnicalStack(technicalStack, elements.technicalStack);
        links && renderLink(links, elements.links);
        if (container) container.classList.add("show");
      });
    }
  });
};
