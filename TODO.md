# TODO - Update Steps and Stepper Components to Use Theme Typography

## Completed Tasks

### ✅ Update Typography Components in elements.tsx
- [x] Add `fontFamily: theme.typography.fontFamily` to FormTitle
- [x] Add `fontFamily: theme.typography.fontFamily` to FormSubtitle
- [x] Add `fontFamily: theme.typography.fontFamily` to StepTitle
- [x] Add `fontFamily: theme.typography.fontFamily` to GroupTitle
- [x] Add `fontFamily: theme.typography.fontFamily` to FieldsetLegend
- [x] Add `fontFamily: theme.typography.fontFamily` to ErrorMessage
- [x] Add `fontFamily: theme.typography.fontFamily` to HintText

## Summary of Changes
- Modified `src/components/Steps/elements.tsx` to explicitly set the font family from the theme typography
- Ensured all text elements in the Steps and Stepper components use the Inter font defined in `src/theme/typography.ts`
- The Inter font is loaded via Next.js in `src/app/layout.tsx` using the CSS variable `--font-inter`

## Next Steps
- Test the components to verify the Inter font is applied correctly
- Check for any other components that might need similar updates
