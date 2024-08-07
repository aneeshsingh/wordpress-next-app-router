import Avatar from "@/app/components/avatar";
import ArticleDate from "@/app/components/articledate";
import CoverImage from "@/app/components/cover-image";
import Link from "next/link";

interface HeroPostProps {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
    };
  };
  dateString: string;
  excerpt: string;
  author: {
    name: string;
    firstName: string;
    lastName: string;
    avatar: {
      url: string;
    };
  };
  slug: string;
}

export default function HeroPost({
                                   title,
                                   coverImage,
                                   dateString,
                                   excerpt,
                                   author,
                                   slug,
                                 }: HeroPostProps) {
  return (
      <section>
        <div className="mb-8 md:mb-16">
          {coverImage && (
              <CoverImage title={title} coverImage={coverImage} slug={slug} />
          )}
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          <div>
            <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
              <Link
                  href={`/posts/${slug}`}
                  className="hover:underline"
                  dangerouslySetInnerHTML={{ __html: title }}
              ></Link>
            </h3>
            <div className="mb-4 md:mb-0 text-lg">
              <ArticleDate dateString={dateString} />
            </div>
          </div>
          <div>
            <div
                className="text-lg leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: excerpt }}
            />
            <Avatar author={author} />
          </div>
        </div>
      </section>
  );
}
