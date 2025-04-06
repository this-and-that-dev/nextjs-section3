import style from "./book-item-skeleton.module.css";

export default function BookItemSkeleton({ count }) {
  const tempArray = new Array(count).fill(0);

  return tempArray.map((_, idx) => {
    return (
      <div className={style.container} key={idx}>
        <div className={style.cover_img}></div>
        <div className={style.info_container}>
          <div className={style.title}></div>
          <div className={style.sub_title}></div>
          <br />
          <div className={style.author}></div>
        </div>
      </div>
    );
  });
}
