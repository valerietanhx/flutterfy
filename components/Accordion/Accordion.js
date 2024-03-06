import styles from "@/components/Accordion/accordion.module.css";
import AccordionItem from "@/components/AccordionItem/AccordionItem";

export default function Accordion() {
  return (
    <div className={styles.accordion}>
      {/* to move to a separate data file*/}
      <AccordionItem
        summary="Lorem ipsum"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt arcu non sodales neque sodales. Purus in mollis nunc sed. Cursus vitae congue mauris rhoncus aenean vel elit. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Faucibus turpis in eu mi bibendum neque egestas. Vitae et leo duis ut diam. Euismod lacinia at quis risus sed vulputate odio ut enim. Sed id semper risus in hendrerit gravida. Lorem ipsum dolor sit amet consectetur. Pulvinar neque laoreet suspendisse interdum consectetur. Cursus sit amet dictum sit amet justo donec enim. Quam pellentesque nec nam aliquam sem et tortor. Cras semper auctor neque vitae. Libero volutpat sed cras ornare arcu dui vivamus arcu felis. Condimentum id venenatis a condimentum. Tristique senectus et netus et malesuada fames. Lorem donec massa sapien faucibus. Elementum tempus egestas sed sed risus pretium quam. Tortor aliquam nulla facilisi cras."
      />
      <AccordionItem
        summary="Nibh venenatis"
        details="Nibh venenatis cras sed felis eget velit aliquet sagittis id. Nisi vitae suscipit tellus mauris a diam maecenas sed. Neque laoreet suspendisse interdum consectetur libero. Id porta nibh venenatis cras sed felis eget velit. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Cursus metus aliquam eleifend mi in nulla posuere. Arcu odio ut sem nulla pharetra. Aliquet nibh praesent tristique magna sit amet purus. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Libero id faucibus nisl tincidunt eget nullam non nisi. Facilisi nullam vehicula ipsum a. Odio ut sem nulla pharetra diam sit amet. Est lorem ipsum dolor sit amet consectetur. Velit dignissim sodales ut eu. Ac turpis egestas integer eget aliquet nibh praesent. In hendrerit gravida rutrum quisque non tellus orci. Ante metus dictum at tempor.        "
      />
    </div>
  );
}
