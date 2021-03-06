/*
 * Marketplace specific configuration.
 *
 * Every filter needs to have following keys:
 * - id:     Unique id of the filter.
 * - label:  The default label of the filter.
 * - type:   String that represents one of the existing filter components:
 *           BookingDateRangeFilter, KeywordFilter, PriceFilter,
 *           SelectSingleFilter, SelectMultipleFilter.
 * - group:  Is this 'primary' or 'secondary' filter?
 *           Primary filters are visible on desktop layout by default.
 *           Secondary filters are behind "More filters" button.
 *           Read more from src/containers/SearchPage/README.md
 * - queryParamNames: Describes parameters to be used with queries
 *                    (e.g. 'price' or 'pub_amenities'). Most of these are
 *                    the same between webapp URLs and API query params.
 *                    You can't change 'dates', 'price', or 'keywords'
 *                    since those filters are fixed to a specific attribute.
 * - config: Extra configuration that the filter component needs.
 *
 * Note 1: Labels could be tied to translation file
 *         by importing FormattedMessage:
 *         <FormattedMessage id="some.translation.key.here" />
 *
 * Note 2: If you need to add new custom filter components,
 *         you need to take those into use in:
 *         src/containers/SearchPage/FilterComponent.js
 *
 * Note 3: If you just want to create more enum filters
 *         (i.e. SelectSingleFilter, SelectMultipleFilter),
 *         you can just add more configurations with those filter types
 *         and tie them with correct extended data key
 *         (i.e. pub_<key> or meta_<key>).
 */

export const filters = [
  {
    id: 'dates',
    label: 'Dates',
    type: 'BookingDateRangeFilter',
    group: 'primary',
    // Note: BookingDateRangeFilter is fixed filter,
    // you can't change "queryParamNames: ['dates'],"
    queryParamNames: ['dates'],
    config: {},
  },
  {
    id: 'price',
    label: 'Price',
    type: 'PriceFilter',
    group: 'primary',
    // Note: PriceFilter is fixed filter,
    // you can't change "queryParamNames: ['price'],"
    queryParamNames: ['price'],
    // Price filter configuration
    // Note: unlike most prices this is not handled in subunits
    config: {
      min: 0,
      max: 1000,
      step: 5,
    },
  },
  {
    id: 'replacement',
    label: 'replacement',
    type: 'ReplacementFilter',
    group: 'primary',
    // Note: PriceFilter is fixed filter,
    // you can't change "queryParamNames: ['price'],"
    queryParamNames: ['replacement'],
    // Price filter configuration
    // Note: unlike most prices this is not handled in subunits
    config: {
      min: 0,
      max: 1000,
      step: 5,
    },
  },
  {
    id: 'keyword',
    label: 'Keyword',
    type: 'KeywordFilter',
    group: 'primary',
    // Note: KeywordFilter is fixed filter,
    // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {},
  },
  {
    id: 'category',
    label: 'Category',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_category'],
    config: {
      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'cinema_cameras', label: 'Cinema Cameras' },
        { key: 'cinema_lenses', label: 'Cinema Lenses' },
        { key: 'still_hybrid_cameras', label: 'Still / Hybrid Cameras' },
        { key: 'still_lenses', label: 'Still Lenses' },
        { key: 'camera_accessories', label: 'Camera Accessories ' },
        { key: 'lighting_electric', label: 'Lighting / Electric' },
        { key: 'audio_equipment', label: 'Audio Equipment' },
        { key: 'monitors_evfs', label: 'Monitors / EVFs' },
        { key: 'camera_supports', label: 'Camera Supports' },
        { key: 'grip', label: 'Grip' },
        { key: 'dit_media_management', label: 'DIT / Media Management' },
        { key: 'media', label: 'Media' },
        { key: 'virtual_reality_and_new_tech', label: 'Virtual Reality & New Tech' },
        { key: 'drones_and_vehicles', label: 'Drones & Vehicles' },
        { key: 'locations_and_spaces', label: 'Locations & Spaces' },
      ],
    },
  },
  {
    id: 'cinema_camera_brands',
    label: 'Cinema Camera Brands',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_cinema_camera_brands'],
    config: {
      options: [
        { key: 'arri', label: 'ARRI' },
        { key: 'blackmagic', label: 'Blackmagic' },
        { key: 'canon', label: 'Canon' },
        { key: 'gopro', label: 'GoPro' },
        { key: 'panasonic', label: 'Panasonic' },
        { key: 'red', label: 'RED' },
        { key: 'sony', label: 'Sony' },
        { key: 'high_speed_camera', label: 'High Speed Camera' },
        { key: 'super_8mm', label: 'Super 8mm' },
        { key: 'other', label: 'Other' },
      ],
    },
  },
  {
    id: 'cinema_lenses',
    label: 'Cinema Camera Lenses',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_cinema_lenses'],
    config: {
      options: [
        { key: 'angenieux', label: 'Angenieux' },
        { key: 'arri', label: 'ARRI' },
        { key: 'bausch_and_lomb', label: 'Baussch & Lomb' },
        { key: 'canon', label: 'Canon' },
        { key: 'celere', label: 'Celere' },
        { key: 'centery_kinoptic', label: 'Centery / Kinoptik' },
        { key: 'cineovision', label: 'Cineovision' },
        { key: 'cooke', label: 'Cooke' },
        { key: 'fujinon', label: 'Fujinon' },
        { key: 'kowa', label: 'Kowa' },
        { key: 'leica', label: 'Leica' },
        { key: 'loma', label: 'Loma' },
        { key: 'mamiya', label: 'Mamiya' },
        { key: 'nikon', label: 'Nikon' },
        { key: 'olympus', label: 'Olympus' },
        { key: 'optica_elite', label: 'Optica-Elite' },
        { key: 'red', label: 'RED' },
        { key: 'rokinon', label: 'Rokinon' },
        { key: 'schneider', label: 'Schneider' },
        { key: 'sigma', label: 'Sigma' },
        { key: 'sony', label: 'Sony' },
        { key: 'tokina', label: 'Tokina' },
        { key: 'zeiss', label: 'Zeiss' },
        { key: 'other', label: 'Other' },
      ],
    },
  },
  {
    id: 'still_hybrid_cameras',
    label: 'Still / Hybrid Cameras',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_still_hybrid_cameras'],
    config: {
      options: [
        { key: 'canon', label: 'Canon' },
        { key: 'nikon', label: 'Nikon' },
        { key: 'fuji', label: 'Fuji' },
        { key: 'olympus', label: 'Olympus' },
        { key: 'sony', label: 'Sony' },
        { key: 'panasonic', label: 'Panasonic' },
        { key: 'samsung', label: 'Samsung' },
        { key: 'gopro', label: 'GoPro' },
        { key: 'other', label: 'Other' },
      ],
    },
  },
  {
    id: 'still_lenses',
    label: 'Still Lenses',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_still_lenses'],
    config: {
      options: [
        { key: 'canon', label: 'Canon' },
        { key: 'nikon', label: 'Nikon' },
        { key: 'fuji', label: 'Fuji' },
        { key: 'leica', label: 'Leica' },
        { key: 'minolta', label: 'Minolta' },
        { key: 'olympus', label: 'Olympus' },
        { key: 'panasonic', label: 'Panasonic' },
        { key: 'pentax', label: 'Pentax' },
        { key: 'sigma', label: 'Sigma' },
        { key: 'sony', label: 'Sony' },
        { key: 'tamron', label: 'Tamron' },
        { key: 'tokina', label: 'Tokina' },
        { key: 'zeiss', label: 'Zeiss' },
        { key: 'other', label: 'Other' },
      ],
    },
  },
  {
    id: 'camera_accessories',
    label: 'Camera Accessories',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_camera_accessories'],
    config: {
      options: [
        { key: 'batteries_power', label: 'Batteries / Power' },
        { key: 'camera_adaptors', label: 'Camera Adaptors' },
        { key: 'cables', label: 'Cables' },
        { key: 'filters', label: 'Filters' },
        { key: 'follow_focuses', label: 'Follow focuses' },
        { key: 'light_meters', label: 'Light Meters' },
        { key: 'matteboxes', label: 'Matteboxes' },
        { key: 'other', label: 'Other' },
      ],
    },
  },
  {
    id: 'lighting_electric',
    label: 'Lighting / Electric',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_lighting_electric'],
    config: {
      options: [
        { key: 'hmi', label: 'HMI' },
        { key: 'tungsten', label: 'Tungsten' },
        { key: 'led', label: 'LED' },
        { key: 'fluorescent', label: 'Fluorescent' },
        { key: 'photography_lighting', label: 'Photography Lighting' },
        { key: 'generator', label: 'Generator' },
        { key: 'other', label: 'Other' },
      ],
    },
  },
  {
    id: 'audio_equipment',
    label: 'Audio Equipment',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_audio_equipment'],
    config: {
      options: [
        { key: 'audio_packages', label: 'Audio Package' },
        { key: 'boom_shotgun', label: 'Boom / Shotgun' },
        { key: 'microphones', label: 'Microphones' },
        { key: 'mixers', label: 'Mixers' },
        { key: 'mixer_accessories', label: 'Mixer Accessories' },
        { key: 'portable_recorders', label: 'Portable Recorder' },
        { key: 'receivers', label: 'Receivers' },
        { key: 'wireless_receivers', label: 'Wireless Receivers' },
        { key: 'transmitters', label: 'Transmitters' },
        { key: 'audio_cables', label: 'Audio Cables' },
        { key: 'audio_accessories', label: 'Audio Accessories' },
        { key: 'audio_batteries', label: 'Audio Batteries' },
        { key: 'speakers', label: 'Speakers' },
        { key: 'mic_preamp', label: 'Mic Preamp' },
        { key: 'interfaces', label: 'Interfaces' },
        { key: 'compressors', label: 'Compressors' },
        { key: 'signal_processing', label: 'Signal Processing' },
        { key: 'equalizers', label: 'Equilizers' },
        { key: 'other', label: 'Other' },
      ],
    },
  },
  {
    id: 'monitors_evfs',
    label: 'Monitors / EVFs',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_monitors_evfs'],
    config: {
      options: [
        { key: 'evfs_viewfinders', label: 'EVFs / Viewfinder' },
        { key: '10_or_more', label: '10" or more' },
        { key: '9_or_more', label: '9" or more' },
        {
          key: 'wireless_monitor_transmitter_receiver',
          label: 'Wireless Monitor / Transmitters / Receivers',
        },
        { key: 'teleprompters', label: 'Teleprompters' },
        { key: 'other', label: 'Other' },
      ],
    },
  },
  {
    id: 'camera_supports',
    label: 'Camera Supports',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_camera_supports'],
    config: {
      options: [
        { key: 'tripod', label: 'Tripod' },
        { key: 'monopod', label: 'Monopod' },
        { key: 'dollie_and_slider', label: 'Dollie and Slider' },
        { key: 'handheld_rig', label: 'Handheld Rig' },
        { key: 'gimbal_and_stabilizer', label: 'Gimbal and Stabilizer' },
        { key: 'underwater_housing', label: 'Underwater housing' },
        { key: 'motion_control', label: 'Motion Control' },
        { key: 'with_operator', label: 'With Operator' },
        { key: 'other', label: 'Other' },
      ],
    },
  },
  {
    id: 'grip',
    label: 'Grip',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_grip'],
    config: {
      options: [
        { key: 'stands', label: 'Stands' },
        { key: 'standbags', label: 'Standbags' },
        { key: 'green_screens_black_drops', label: 'Green Screens / Black Drops' },
        { key: 'flags_and_nets', label: 'Flags and Nets' },
        { key: 'apple_boxes', label: 'Apple boxes' },
        { key: '6x6_rags_and_frames', label: '6x6 Rags and Frames' },
        { key: '8x8_rags_and_frames', label: '8x8 Rags and Frames' },
        { key: '10x10_rags_and_frames', label: '10x10 Rags and Frames' },
        { key: '12x12_rags_and_frames', label: '12x12 Rags and Frames' },
        { key: '20x20_rags_and_frames', label: '20x20 Rags and Frames' },
        { key: 'car_mounts', label: 'Car Mounts' },
        { key: 'clamps', label: 'Clamps' },
        { key: 'reflectors_flex_fills', label: 'Reflectors / FLex Fills' },
        { key: 'other', label: 'Other' },
      ],
    },
  },
  {
    id: 'dit_media_management',
    label: 'DIT / Media Mangement',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_dit_media_management'],
    config: {
      options: [
        { key: 'converters', label: 'Converters' },
        { key: 'camera_carts', label: 'Camera Carts' },
        { key: 'color_correction', label: 'Color Correction' },
        { key: 'dit_media_manager_kit', label: 'Dit / Media Manager Kit' },
        { key: 'hard_drives', label: 'Hard Drives' },
        { key: 'other', label: 'Other' },
      ],
    },
  },
  {
    id: 'media',
    label: 'Media',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_media'],
    config: {
      options: [
        { key: 'compact_flash_cards', label: 'Compact Flash Cards' },
        { key: 'cfast_cards', label: 'CFast Cards' },
        { key: 'sd_cards', label: 'SD Cards' },
        { key: 'sxs_cards', label: 'SxS Cards' },
        { key: 'external_recorders', label: 'External Recorders' },
        { key: 'ssd_drives', label: 'SSD Drives' },

        { key: 'other', label: 'Other' },
      ],
    },
  },
  {
    id: 'virtual_reality_and_new_tech',
    label: 'Virtual Reality & New Tech',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_virtual_reality_and_new_tech'],
    config: {
      options: [
        { key: 'vr_headset', label: 'VR Headset' },
        { key: 'vr_rigs', label: 'VR Rigs' },
        { key: 'gopro_vr_rigs', label: 'GoPro VR Rigs' },
        { key: 'nokia_vr_rigs', label: 'Nokia VR Rigs' },
        { key: 'with_operator', label: 'with Operator' },
        { key: 'other', label: 'Other' },
      ],
    },
  },
  {
    id: 'drones_and_vehicles',
    label: 'Drones & Vehicles',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_drones_and_vehicles'],
    config: {
      options: [
        { key: 'drones', label: 'Drones' },
        { key: 'helicopters', label: 'Helicopters' },
        { key: 'vehicles', label: 'Vehicles' },
        { key: 'production_vehicles', label: 'Production Vehicles' },
        { key: 'with_operator', label: 'with Operator' },
        { key: 'other', label: 'Other' },
      ],
    },
  },
  {
    id: 'locations_and_spaces',
    label: 'Locations & Spaces',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_locations_and_spaces'],
    config: {
      options: [
        { key: 'commercial_retail', label: 'Commercial / Retail' },
        { key: 'editin_suites_post_facilities', label: 'Edition Suites / Post Facilities' },
        { key: 'residential_private', label: 'Residential / Private' },
        { key: 'studio_stage', label: 'Studio / Stage' },
        { key: 'work_spaces_offices', label: 'Work Spaces / Offices' },
        { key: 'other', label: 'Other' },
      ],
    },
  },

];

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Note: queryParamName 'sort' is fixed,
  // you can't change it since Flex API expects it to be named as 'sort'
  queryParamName: 'sort',

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  // Keyword filter is sorting the results already by relevance.
  // If keyword filter is active, we need to disable sorting.
  conflictingFilters: ['keyword'],

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};

export const careerJob = 
  {
      options: [
        { key: 'select', label: 'select'},
        { key: '1st AC - Focus Puller', label: '1st AC - Focus Puller'},
        { key: '2D & 3D Computer Animation / Animator', label: '2D & 3D Computer Animation / Animator'},
        { key: '2nd 2nd AD', label: '2nd 2nd AD'},
        { key: '2nd AC - Clapper / Loader', label: '2nd AC - Clapper / Loader'},
        { key: '2nd AD', label: '2nd AD'},
        { key: '360 Video', label: '360 Video'},
        { key: 'Actor - Commercial', label: 'Actor - Commercial'},
        { key: 'Actor - Dance', label: 'Actor - Dance'},
        { key: 'Actor - Film & Television', label: 'Actor - Film & Television'},
        { key: 'Actor - Impersonators / Look-Alikes & Costume Characters', label: 'Actor - Impersonators / Look-Alikes & Costume Characters'},
        { key: 'Actor - Live Host / Emcee', label: 'Actor - Live Host / Emcee'},
        { key: 'Actor - Martial Arts / Combat Fighting', label: 'Actor - Martial Arts / Combat Fighting'},
        { key: 'Actor - Newscaster / Video Journalist', label: 'Actor - Newscaster / Video Journalist'},
        { key: 'Actor - On Camera Host', label: 'Actor - On Camera Host'},
        { key: 'Actor - Stand In / Body Double', label: 'Actor - Stand In / Body Double'},
        { key: 'Actor - Stunt Driving / Precision Driving', label: 'Actor - Stunt Driving / Precision Driving'},
        { key: 'Actor - Stunt Players / Stunt Person', label: 'Actor - Stunt Players / Stunt Person'},
        { key: 'Actor - Vocal / Singing', label: 'Actor - Vocal / Singing'},
        { key: 'Actor - Weapons Handling', label: 'Actor - Weapons Handling'},
        { key: 'Aerial Photographer', label: 'Aerial Photographer'},
        { key: 'Agent', label: 'Agent'},
        { key: 'Animal Wrangler', label: 'Animal Wrangler'},
        { key:' Animation Artist', label: 'Animation Artist'},
        { key: 'Art Department', label: 'Art Department'},
        { key: 'Art Director', label: 'Art Director'},
        { key: 'Art PA', label: 'Art PA'},
        { key: 'Assistant Art Director', label: 'Assistant Art Director'},
        { key: 'Assistant Choreographer', label: 'Assistant Choreographer'},
        { key: 'Assistant Editor', label: 'Assistant Editor'},
        { key: 'Assistant Photographer', label: 'Assistant Photographer'},
        { key: 'Assistant Production Manager', label: 'Assistant Production Manager'},
        { key: 'Associate Producer', label: 'Associate Producer'},
        { key: 'Audio Technician', label: 'Audio Technician'},
        { key: 'AV Technician', label: 'AV Technician'},
        { key: 'AV Technician / Projectionist', label: 'AV Technician / Projectionist'},
        { key: 'Best Boy', label: 'Best Boy'},
        { key: 'Best Boy Electric', label: 'Best Boy Electric'},
        { key: 'Best Boy Grip', label: 'Best Boy Grip'},
        { key: 'Boom Operator', label: 'Boom Operator'},
        { key: 'Broadcast Engineer', label: 'Broadcast Engineer'},
        { key: 'Buyer', label: 'Buyer'},
        { key: 'Camera Operator', label: 'Camera Operator'},
        { key: 'Camera PA', label: 'Camera PA'},
        { key: 'Casting Assistant', label: 'Casting Assistant'},
        { key: 'Casting Director', label: 'Casting Director'},
        { key: 'Caterer', label: 'Caterer'},
        { key: 'Chief Lighting Technician', label: 'Chief Lighting Technician'},
        { key: 'Chief Photographer', label: 'Chief Photographer'},
        { key: 'Choreographer', label: 'Choreographer'},
        { key: 'Cinematographer', label: 'Cinematographer'},
        { key: 'Color Correction / Color Grading / Colorist', label: 'Color Correction / Color Grading / Colorist'},
        { key: 'Commercial Director', label: 'Commercial Director'},
        { key: 'Commercial Photographer', label: 'Commercial Photographer'},
        { key: 'Composer', label: 'Composer'},
        { key: 'Compositor', label: 'Compositor'},
        { key: 'Construction Coordinator', label: 'Construction Coordinator'},
        { key: 'Construction Department', label: 'Construction Department'},
        { key: 'Corporate Photographer', label: 'Corporate Photographer'},
        { key: 'Costume / Wardrobe Stylist', label: 'Costume / Wardrobe Stylist'},
        { key: 'Costume Designer', label: 'Costume Designer'},
        { key: 'Costume Supervisor', label: 'Costume Supervisor'},
        { key: 'Courier', label: 'Courier'},
        { key: 'Court Videographer', label: 'Court Videographer'},
        { key: 'Craft Service', label: 'Craft Service'},
        { key: 'Data Wrangler', label: 'Data Wrangler'},
        { key: 'Designer', label: 'Designer'},
        { key: 'Dialect Coach / Accent Coach', label: 'Dialect Coach / Accent Coach'},
        { key: 'Digital & Visual Effects Artist', label: 'Digital & Visual Effects Artist'},
        { key: 'Digital Imaging Specialist', label: 'Digital Imaging Specialist'},
        { key: 'Digital Imaging Technician', label: 'Digital Imaging Technician'},
        { key: 'Digital Utility', label: 'Digital Utility'},
        { key: 'Director', label: 'Director'},
        { key: 'Director of Photography', label: 'Director of Photography'},
        { key: 'DJ', label: 'DJ'},
        { key: 'Dolly Grip', label: 'Dolly Grip'},
        { key: 'Dramatic Instruction', label: 'Dramatic Instruction'},
        { key: 'Drone Operator / UAV Pilot', label: 'Drone Operator / UAV Pilot'},
        { key: 'Editor', label: 'Editor'},
        { key: 'Electrician', label: 'Electrician'},
        { key: 'Event Videographer', label: 'Event Videographer'},
        { key: 'Executive Producer', label: 'Executive Producer'},
        { key: 'Fashion Photographer', label: 'Fashion Photographer'},
        { key: 'Feature Director', label: 'Feature Director'},
        { key: 'Film Editor', label: 'Film Editor'},
        { key: 'Film Loader', label: 'Film Loader'},
        { key: 'Film Producer', label: 'Film Producer'},
        { key: 'Foley Artist', label: 'Foley Artist'},
        { key: 'Food Stylist', label: 'Food Stylist'},
        { key: 'Gaffer', label: 'Gaffer'},
        { key: 'Generator Operator', label: 'Generator Operator'},
        { key: 'Gimbal Operator', label: 'Gimbal Operator'},
        { key: 'Graphic Artist / Graphic Design', label: 'Graphic Artist / Graphic Design'},
        { key: 'Grip', label: 'Grip'},
        { key: 'Hair Stylist / Key Hair / Production Hair Styling', label: 'Hair Stylist / Key Hair / Production Hair Styling'},
        { key: 'Head Carpenter', label: 'Head Carpenter'},
        { key: 'Industrial Photographer', label: 'Industrial Photographer'},
        { key: 'Intern', label: 'Intern'},
        { key: 'Jib Operator / Crane Operator', label: 'Jib Operator / Crane Operator'},
        { key: 'Key Grip', label: 'Key Grip'},
        { key: 'Key Production Assistant', label: 'Key Production Assistant'},
        { key: 'Laboratory Manager', label: 'Laboratory Manager'},
        { key: 'Lead Man', label: 'Lead Man'},
        { key: 'Legal Counsel', label: 'Legal Counsel'},
        { key: 'Lighting Crew', label: 'Lighting Crew'},
        { key: 'Lighting Director', label: 'Lighting Director'},
        { key: 'Line Producer', label: 'Line Producer'},
        { key: 'Location Assistant', label: 'Location Assistant'},
        { key: 'Location Manager', label: 'Location Manager'},
        { key: 'Location Production Assistant', label: 'Location Production Assistant'},
        { key: 'Location Scout', label: 'Location Scout'},
        { key: 'Make-Up Artist / Key Makeup', label: 'Make-Up Artist / Key Makeup'},
        { key: 'Make-up Supervisor', label: 'Make-up Supervisor'},
        { key: 'Marine Coordinator', label: 'Marine Coordinator'},
        { key: 'Matte Painter', label: 'Matte Painter'},
        { key: 'Media Manager', label: 'Media Manager'},
        { key: 'Medical Photographer', label: 'Medical Photographer'},
        { key: 'Medium Format Photographer', label: 'Medium Format Photographer'},
        { key: 'Motion Control Technician/Operator', label: 'Motion Control Technician/Operator'},
        { key: 'Motion Graphics Artist', label: 'Motion Graphics Artist'},
        { key: 'Music Composer', label: 'Music Composer'},
        { key: 'Music Director', label: 'Music Director'},
        { key: 'Music Producer', label: 'Music Producer'},
        { key: 'Music Scoring', label: 'Music Scoring'},
        { key: 'Music Supervisor', label: 'Music Supervisor'},
        { key: 'Music Video Director', label: 'Music Video Director'},
        { key: 'Musician', label: 'Musician'},
        { key: 'News Camera Operator', label: 'News Camera Operator'},
        { key: 'News Photographer', label: 'News Photographer'},
        { key: 'Office Production Assistant', label: 'Office Production Assistant'},
        { key: 'Personal Assistant', label: 'Personal Assistant'},
        { key: 'Personal Trainer', label: 'Personal Trainer'},
        { key: 'Photo Sales Manager', label: 'Photo Sales Manager'},
        { key: 'Photographer', label: 'Photographer'},
        { key: 'Photography Supervisor', label: 'Photography Supervisor'},
        { key: 'Photojournalist', label: 'Photojournalist'},
        { key: '56Picture Vehicles Coordinator', label:'56Picture Vehicles Coordinator'},
        { key: 'Portrait Photographer', label: 'Portrait Photographer'},
        { key: 'Post Production Supervisor', label: 'Post Production Supervisor'},
        { key: 'Press Photographer', label: 'Press Photographer'},
        { key: 'Producer', label: 'Producer'},
        { key: 'Production Accountant', label: 'Production Accountant'},
        { key: 'Production Assistant', label: 'Production Assistant'},
        { key: 'Production Coordinator', label: 'Production Coordinator'},
        { key: 'Production Designer', label: 'Production Designer'},
        { key: 'Production Manager', label: 'Production Manager'},
        { key: 'Production Secretary', label: 'Production Secretary'},
        { key: 'Production Supervisor', label: 'Production Supervisor'},
        { key: 'Professional Photographer', label: 'Professional Photographer'},
        { key: 'Prop Master', label: 'Prop Master'},
        { key: 'Retoucher', label: 'Retoucher'},
        { key: 'Rigging Gaffer', label: 'Rigging Gaffer'},
        { key: 'Rigging Grip', label: 'Rigging Grip'},
        { key: 'Satellite Truck Operator / SAT Operator / SNG Operator', label: 'Satellite Truck Operator / SAT Operator / SNG Operator'},
        { key: 'Scenic Artist', label: 'Scenic Artist'},
        { key: 'Script Supervisor', label: 'Script Supervisor'},
        { key: 'Scriptwriter', label: 'Scriptwriter'},
        { key: 'Second Assistant Sound', label:  'Second Assistant Sound'},
        { key: 'Second Unit Director', label: 'Second Unit Director'},
        { key: 'Second Unit Director of Photography', label: 'Second Unit Director of Photography'},
        { key: 'Set Construction', label: 'Set Construction'},
        { key: 'Set Decorator', label: 'Set Decorator'},
        { key: 'Set Designer', label: 'Set Designer'},
        { key: 'Set Dresser', label: 'Set Dresser'},
        { key: 'Showrunner', label: 'Showrunner'},
        { key: 'Sound', label: 'Sound'},
        { key: 'Sound Designer', label: 'Sound Designer'},
        { key: 'Sound Editor', label: 'Sound Editor'},
        { key: 'Sound Mixer / Recordist', label: 'Sound Mixer / Recordist'},
        { key: 'Special Effects Assistant', label: 'Special Effects Assistant'},
        { key: 'Special Effects Coordinator', label: 'Special Effects Coordinator'},
        { key: 'Special Effects Make-up Artist', label: 'Special Effects Make-up Artist'},
        { key: 'Special Effects Pyrotechnics', label: 'Special Effects Pyrotechnics'},
        { key: 'Staff Photographer', label: 'Staff Photographer'},
        { key: 'Stage Manager', label: 'Stage Manager'},
        { key: 'Steadicam Operator', label: 'Steadicam Operator'},
        { key: 'Storyboard Artist', label: 'Storyboard Artist'},
        { key: 'Street Photographer', label: 'Street Photographer'},
        { key: 'Stunt Coordinators', label: 'Stunt Coordinators'},
        { key: 'Supervising Producer', label: 'Supervising Producer'},
        { key: 'Technical Advisor', label: 'Technical Advisor'},
        { key: 'Technical Director', label: 'Technical Director'},
        { key: 'Telecine Colorist', label: 'Telecine Colorist'},
        { key: 'Teleprompter Operator', label: 'Teleprompter Operator'},
        { key: 'Television Director', label: 'Television Director'},
        { key: 'Tintype Photographer', label: 'Tintype Photographer'},
        { key: 'Transportation Department', label: 'Transportation Department'},
        { key: 'Tutor', label: 'Tutor'},
        { key: 'TV Producer', label: 'TV Producer'},
        { key: 'Underwater Camera Operator', label: 'Underwater Camera Operator'},
        { key: 'Underwater Photographer', label: 'Underwater Photographer'},
        { key: 'Unit Manager', label: 'Unit Manager'},
        { key: 'Unit Production Manager', label: 'Unit Production Manager'},
        { key: 'Unit Publicist', label: 'Unit Publicist'},
        { key: 'Video Assist / Playback', label: 'Video Assist / Playback'},
        { key: 'Video Assistant / Video Utility', label: 'Video Assistant / Video Utility'},
        { key: 'Video Editor', label: 'Video Editor'},
        { key: 'Video Engineers / Broadcast Engineer', label: 'Video Engineers / Broadcast Engineer'},
        { key: 'Video Producer', label: 'Video Producer'},
        { key: 'Videographer', label: 'Videographer'},
        { key: 'Visual Effects Creative Director', label: 'Visual Effects Creative Director'},
        { key: 'Visual Effects Editor', label: 'Visual Effects Editor'},
        { key: 'Visual Effects Producer', label: 'Visual Effects Producer'},
        { key: 'Visual Effects Supervisor', label: 'Visual Effects Supervisor'},
        { key: 'Voice Over Talent', label: 'Voice Over Talent'},
        { key: 'Wardrobe Assistant', label: 'Wardrobe Assistant'},
        { key: 'Wardrobe PA', label: 'Wardrobe PA'},
        { key: 'Weapons Master', label: 'Weapons Master'},
        { key: 'Web Designer', label: 'Web Designer'},
        { key: 'Web Producer', label: 'Web Producer'},
        { key: 'Wedding Photographer', label: 'Wedding Photographer'},
        { key: 'Wedding Videographer', label: 'Wedding Videographer'},
        { key: 'Wildlife Photographer', label: 'Wildlife Photographer'},
        { key: 'Writer', label: 'Writer'},
        { key: "Writer's Assistant", label: "Writer's Assistant"},
      ],
  };

