import { Button, ImageList, ImageListItem, Typography } from "@mui/material";
import { Dispatch, useEffect, useRef, useState } from "react";
import "./style.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { IImage } from "../../App";


export const Portfolio = (props: {
  setDisplayImage: Dispatch<IImage>;
  itemData: IImage[];
  title?: string;
  itemLimit: number;
}) => {
  const { setDisplayImage, itemData, title, itemLimit } = props;
  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  // const [displayImage, setDisplayImage] = useState<IImage | null>(null);

  const [displayMore, setDisplayMore] = useState<boolean>(false);
  return (
    <div>

      <div className="portfolio-main-container">
      {!!title &&
        <div
          style={{
            // height: "30vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: 30,
              color: "#8C685E",
              textAlign: "center",
            }}
          >
            {title}
          </p>
        </div>
}
        <ImageList
          sx={{ width: "70%" }}
          variant={
            window.innerHeight > window.innerWidth ? "masonry" : "quilted"
          }
          cols={window.innerHeight > window.innerWidth ? 1 : 3}
          gap={20}
          rowHeight={
            window.innerHeight < window.innerWidth
              ? window.innerWidth * 0.2
              : undefined
          }
        >
          {itemData.map(
            (item, idx) =>
              (idx < itemLimit || displayMore) && (
                <ImageListItem
                  key={idx}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    key={item.title}
                    {...srcset(
                      item.img,
                      window.innerHeight < window.innerWidth
                        ? window.innerWidth * 0.2
                        : window.innerWidth * 0.8,
                      item.rows,
                      item.cols
                    )}
                    width={
                      window.innerHeight < window.innerWidth
                        ? undefined
                        : window.innerWidth * 0.8
                    }
                    alt={item.title}
                    loading="lazy"
                    onClick={() => {
                      setDisplayImage(item);
                    }}
                  />
                </ImageListItem>
              )
          )}
        </ImageList>

{itemData.length > itemLimit &&
        <Button
        variant="outlined"
        aria-label="afficher plus d'images"
        style={{ color: "pink", borderColor: "#8C685E", marginBottom: !!title ? 20 : 30 }}
        endIcon={
          displayMore ? (
            <ExpandLessIcon style={{ color: "pink" }} />
            ) : (
              <ExpandMoreIcon style={{ color: "pink" }} />
              )
            }
            onClick={() => setDisplayMore(!displayMore)}
            >
          {!displayMore ? "Voir plus" : "Voir moins"}
        </Button>}
      </div>
    </div>
  );
};


