import React, { useEffect, useRef, useState } from "react";

interface TypewriterTextprops {
    text: string;
    isHovered?: boolean;
    playOnce?: boolean;
}

type Status ="idle" | "typing" | "done";

