#!/usr/bin/env bash
# Copy the curated "selected" photos from the content library into the site's
# public folder and resize them for the web.
#
# Usage:
#   PORTFOLIO_LIBRARY="/path/to/Portfolio" ./scripts/prepare-media.sh
#
# By default the library is assumed to be the parent directory of this repo
# (i.e. Website/ lives inside Portfolio/).
set -euo pipefail

SITE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LIB="${PORTFOLIO_LIBRARY:-$(cd "$SITE_DIR/.." && pwd)}"
OUT="$SITE_DIR/public"

if [ ! -d "$LIB/Projects" ]; then
  echo "Could not find the content library at: $LIB" >&2
  echo "Set PORTFOLIO_LIBRARY to the Portfolio folder and try again." >&2
  exit 1
fi

img() {
  local src="$1"
  local dest="$2"
  mkdir -p "$(dirname "$dest")"
  case "$(printf '%s' "$src" | tr '[:upper:]' '[:lower:]')" in
    *.png)
      sips -Z 2000 -s format png "$src" --out "$dest" >/dev/null
      ;;
    *.svg)
      cp "$src" "$dest"
      ;;
    *)
      sips -Z 2000 -s format jpeg -s formatOptions 82 "$src" --out "$dest" >/dev/null
      ;;
  esac
  echo "  $dest"
}

copy_file() {
  local src="$1"
  local dest="$2"
  mkdir -p "$(dirname "$dest")"
  cp "$src" "$dest"
  echo "  $dest"
}

echo "Preparing media from $LIB"

# Experience
img "$LIB/Experience/01-Shield-X-HIP-Lab/photos/selected/01-logo.png" "$OUT/images/shield-x/01-logo.png"
img "$LIB/Experience/01-Shield-X-HIP-Lab/photos/selected/02-helmet-scan.jpg" "$OUT/images/shield-x/02-helmet-scan.jpg"
img "$LIB/Experience/01-Shield-X-HIP-Lab/photos/selected/03-helmet-scan-prep.jpg" "$OUT/images/shield-x/03-helmet-scan-prep.jpg"

img "$LIB/Experience/02-Greenlight-Innovation/photos/selected/01-logo.png" "$OUT/images/greenlight/01-logo.png"
img "$LIB/Experience/02-Greenlight-Innovation/photos/selected/02-team-floor.jpg" "$OUT/images/greenlight/02-team-floor.jpg"
img "$LIB/Experience/02-Greenlight-Innovation/photos/selected/03-certificate.jpg" "$OUT/images/greenlight/03-certificate.jpg"

# Projects
img "$LIB/Projects/01-SFU-Rover-Communications/photos/selected/01-card.jpg" "$OUT/images/sfu-rover-communications/01-card.jpg"

img "$LIB/Projects/02-Notion-Learning-System/photos/selected/01-card-logo.png" "$OUT/images/notion-learning-system/01-card-logo.png"
img "$LIB/Projects/02-Notion-Learning-System/photos/selected/02-calendar.jpg" "$OUT/images/notion-learning-system/02-calendar.jpg"
img "$LIB/Projects/02-Notion-Learning-System/photos/selected/03-assignments.jpg" "$OUT/images/notion-learning-system/03-assignments.jpg"

img "$LIB/Projects/03-PLC-Bottling-Plant/photos/selected/01-card-plant.jpg" "$OUT/images/plc-bottling-plant/01-card-plant.jpg"
img "$LIB/Projects/03-PLC-Bottling-Plant/photos/selected/02-counters.png" "$OUT/images/plc-bottling-plant/02-counters.png"
img "$LIB/Projects/03-PLC-Bottling-Plant/photos/selected/03-user-logic.png" "$OUT/images/plc-bottling-plant/03-user-logic.png"
img "$LIB/Projects/03-PLC-Bottling-Plant/photos/selected/04-fill-sequence.png" "$OUT/images/plc-bottling-plant/04-fill-sequence.png"
img "$LIB/Projects/03-PLC-Bottling-Plant/photos/selected/05-sort-sequence.png" "$OUT/images/plc-bottling-plant/05-sort-sequence.png"
img "$LIB/Projects/03-PLC-Bottling-Plant/photos/selected/06-ladder-logic.png" "$OUT/images/plc-bottling-plant/06-ladder-logic.png"

img "$LIB/Projects/04-Smart-Glasses-Capstone/photos/selected/00-card.jpg" "$OUT/images/smart-glasses/00-card.jpg"
img "$LIB/Projects/04-Smart-Glasses-Capstone/photos/selected/01-hero-glasses.jpg" "$OUT/images/smart-glasses/01-hero-glasses.jpg"
img "$LIB/Projects/04-Smart-Glasses-Capstone/photos/selected/Pasted 2026-10-12 at 12.08.16.png" "$OUT/images/smart-glasses/02-timing.png"
img "$LIB/Projects/04-Smart-Glasses-Capstone/photos/selected/Pasted 2026-10-12 at 12.08.35.png" "$OUT/images/smart-glasses/03-cadence.png"
img "$LIB/Projects/04-Smart-Glasses-Capstone/photos/selected/03-team-expo.jpg" "$OUT/images/smart-glasses/04-team-expo.jpg"
img "$LIB/Projects/04-Smart-Glasses-Capstone/photos/selected/04-award.jpg" "$OUT/images/smart-glasses/05-award.jpg"
copy_file "$LIB/Projects/04-Smart-Glasses-Capstone/photos/selected/LENZ Ad.mp4" "$OUT/videos/lenz/lenz-ad.mp4"
copy_file "$LIB/Projects/04-Smart-Glasses-Capstone/photos/selected/lenz-skeleton-gait.mp4" "$OUT/videos/lenz/lenz-skeleton-gait.mp4"

# Poster frame for the skeleton clip, grabbed with macOS Quick Look.
if command -v qlmanage >/dev/null 2>&1; then
  poster_tmp="$(mktemp -d)"
  qlmanage -t -s 1600 -o "$poster_tmp" "$LIB/Projects/04-Smart-Glasses-Capstone/photos/selected/lenz-skeleton-gait.mp4" >/dev/null 2>&1 || true
  if [ -f "$poster_tmp/lenz-skeleton-gait.mp4.png" ]; then
    sips -Z 1600 -s format jpeg -s formatOptions 82 \
      "$poster_tmp/lenz-skeleton-gait.mp4.png" \
      --out "$OUT/images/smart-glasses/06-skeleton-poster.jpg" >/dev/null
    echo "  $OUT/images/smart-glasses/06-skeleton-poster.jpg"
  fi
  rm -rf "$poster_tmp"
fi

img "$LIB/Projects/05-Calligraphy-Robot-Arm/photos/selected/01-card-arm.jpg" "$OUT/images/calligraphy-robot-arm/01-card-arm.jpg"
img "$LIB/Projects/05-Calligraphy-Robot-Arm/photos/selected/02-solidworks-link.jpg" "$OUT/images/calligraphy-robot-arm/02-solidworks-link.jpg"
img "$LIB/Projects/05-Calligraphy-Robot-Arm/photos/selected/03-isometric-sketch.jpg" "$OUT/images/calligraphy-robot-arm/03-isometric-sketch.jpg"
img "$LIB/Projects/05-Calligraphy-Robot-Arm/photos/selected/04-inverse-kinematics.jpg" "$OUT/images/calligraphy-robot-arm/04-inverse-kinematics.jpg"
img "$LIB/Projects/05-Calligraphy-Robot-Arm/photos/selected/05-cad-to-matlab.jpg" "$OUT/images/calligraphy-robot-arm/05-cad-to-matlab.jpg"
img "$LIB/Projects/05-Calligraphy-Robot-Arm/photos/selected/06-assembly-full-table.jpg" "$OUT/images/calligraphy-robot-arm/06-assembly-full-table.jpg"

img "$LIB/Projects/06-Fan-Speed-Controller/photos/selected/01-hero-breadboard.jpg" "$OUT/images/fan-speed-controller/01-hero-breadboard.jpg"
img "$LIB/Projects/06-Fan-Speed-Controller/photos/selected/02-scope-debug.jpg" "$OUT/images/fan-speed-controller/02-scope-debug.jpg"
img "$LIB/Projects/06-Fan-Speed-Controller/photos/selected/03-wiring-detail.jpg" "$OUT/images/fan-speed-controller/03-wiring-detail.jpg"
img "$LIB/Projects/06-Fan-Speed-Controller/photos/selected/04-setup-top-view.jpg" "$OUT/images/fan-speed-controller/04-setup-top-view.jpg"
img "$LIB/Projects/06-Fan-Speed-Controller/photos/selected/05-wiring-closeup.jpg" "$OUT/images/fan-speed-controller/05-wiring-closeup.jpg"

img "$LIB/Projects/07-Widget-Assembly-Line/photos/selected/01-hero-sorting-logic.jpg" "$OUT/images/widget-assembly-line/01-hero-sorting-logic.jpg"
img "$LIB/Projects/07-Widget-Assembly-Line/photos/selected/02-labview-detail.jpg" "$OUT/images/widget-assembly-line/02-labview-detail.jpg"
img "$LIB/Projects/07-Widget-Assembly-Line/photos/selected/03-file-recovery.jpg" "$OUT/images/widget-assembly-line/03-file-recovery.jpg"
img "$LIB/Projects/07-Widget-Assembly-Line/photos/selected/04-report-page2.jpg" "$OUT/images/widget-assembly-line/04-report-page2.jpg"
img "$LIB/Projects/07-Widget-Assembly-Line/photos/selected/05-report-page3.jpg" "$OUT/images/widget-assembly-line/05-report-page3.jpg"

img "$LIB/Projects/08-Vehicle-Restoration/photos/selected/01-card-undercarriage.jpg" "$OUT/images/vehicle-restoration/01-card-undercarriage.jpg"
img "$LIB/Projects/08-Vehicle-Restoration/photos/selected/02-engine-bay.jpg" "$OUT/images/vehicle-restoration/02-engine-bay.jpg"
img "$LIB/Projects/08-Vehicle-Restoration/photos/selected/03-brake-detail.jpg" "$OUT/images/vehicle-restoration/03-brake-detail.jpg"
img "$LIB/Projects/08-Vehicle-Restoration/photos/selected/04-suspension-work.jpg" "$OUT/images/vehicle-restoration/04-suspension-work.jpg"
img "$LIB/Projects/08-Vehicle-Restoration/photos/selected/05-bumper-bodywork.jpg" "$OUT/images/vehicle-restoration/05-bumper-bodywork.jpg"

img "$LIB/Projects/09-Building-PC/photos/selected/01-card.jpg" "$OUT/images/building-pc/01-card.jpg"
img "$LIB/Projects/09-Building-PC/photos/selected/02-parts-haul.jpg" "$OUT/images/building-pc/02-parts-haul.jpg"

echo "Done."
