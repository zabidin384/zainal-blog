import React from "react";

export default function Tags({ tags }) {
	return (
		<div>
			<div>
				<div className="blog-heading text-start py-2 mb-4">Tags</div>
			</div>
			<div className="tags">
				{tags?.map((tag, i) => (
					<div className="tag" key={i}>
						{tag}
					</div>
				))}
			</div>
		</div>
	);
}
