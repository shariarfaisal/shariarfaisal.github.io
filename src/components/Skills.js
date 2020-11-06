import React from 'react'

function SkillsItem({title, i, img}){
  return (
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 my-2">
      <div className="item">
        {i && <i className={`${i} bx-md d-block`}></i>}
        {img && <img src={img} width="36px" alt={title} />}
        <span className="d-block">{title}</span>
      </div>
    </div>
  )
}

function Skills(props) {
  return(
    <section id="skills" className="py-4 bg-light">
      <div className="container">
        <h1 className="title-1">Skill Set</h1>
        <div className="row mx-0 justify-content-center">
          <SkillsItem title="JavaScript" i="bx bxl-javascript" />
          <SkillsItem title="Node JS" i="bx bxl-nodejs" />
          <SkillsItem title="React JS" i="bx bxl-react" />
          <SkillsItem title="TypeScript" img="./img/typescript.png" />
          <SkillsItem title="Express JS" img="./img/express.svg" />
          <SkillsItem title="Nest JS" img="./img/nestjs.png" />
          <SkillsItem title="Restful API" img="./img/api.png" />
          <SkillsItem title="GraphQL" img="./img/graphql.svg" />
          <SkillsItem title="Golang" img="./img/golang.png" />
          <SkillsItem title="SQL" img="./img/sql.png" />
          <SkillsItem title="MongoDB" img="./img/mongodb.png" />
          <SkillsItem title="Postgres" img="./img/postgres.png" />
          <SkillsItem title="Docker" img="./img/docker.png" />
        </div>
      </div>
    </section>

  )
}
export default Skills
