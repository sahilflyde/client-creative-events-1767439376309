import ImageCards from "./imageCard";
import GridSection from "./gridHero";
import Container from "./spacing";

export default function TargetAudienceHero(props) {
  const {
    label,
    title,
    subtitle,
    columns,
    gap,
    minColWidth,
    items: rawItems,
  } = props;

  //  Convert DB object → array
  const items = Array.isArray(rawItems)
    ? rawItems
    : typeof rawItems === "object" && rawItems !== null
      ? Object.values(rawItems)
      : [];

  return (
    <div id="scrollSecondaryButton">
      <Container variant="header">
        <GridSection
          label={label}
          title={title}
          subtitle={subtitle}
          columns={columns}
          gap={gap}
          minColWidth={minColWidth}
          items={items.map((item) => ({
            colSpan: item.colSpan || 1,
            rowSpan: item.rowSpan || 1,
            component: (
              <ImageCards
                link={item.link}
                heading={item.heading}
                description={item.description}
                imageLink={item.imageLink}
                textPosition={item.textPosition || "bottom"}
              />
            ),
          }))}
          wrapperClass=""
        />
      </Container>
    </div>
  );
}
