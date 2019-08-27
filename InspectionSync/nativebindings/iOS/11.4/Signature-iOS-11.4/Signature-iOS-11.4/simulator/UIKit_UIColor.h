#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIColor_symbols(JSContext*);
@protocol UIColorInstanceExports<JSExport, NSSecureCodingInstanceExports_, NSCopyingInstanceExports_>
@property (readonly,nonatomic) id CGColor;
@property (readonly,nonatomic) CIColor * CIColor;
-(void) setStroke;
-(void) set;
JSExportAs(initWithPatternImage,
-(UIColor *) jsinitWithPatternImage: (UIImage *) image );
-(id) CGColor;
JSExportAs(initWithDisplayP3RedGreenBlueAlpha,
-(UIColor *) jsinitWithDisplayP3Red: (CGFloat) displayP3Red green: (CGFloat) green blue: (CGFloat) blue alpha: (CGFloat) alpha );
JSExportAs(initWithHueSaturationBrightnessAlpha,
-(UIColor *) jsinitWithHue: (CGFloat) hue saturation: (CGFloat) saturation brightness: (CGFloat) brightness alpha: (CGFloat) alpha );
JSExportAs(initWithRedGreenBlueAlpha,
-(UIColor *) jsinitWithRed: (CGFloat) red green: (CGFloat) green blue: (CGFloat) blue alpha: (CGFloat) alpha );
JSExportAs(initWithCIColor,
-(UIColor *) jsinitWithCIColor: (CIColor *) ciColor );
JSExportAs(initWithWhiteAlpha,
-(UIColor *) jsinitWithWhite: (CGFloat) white alpha: (CGFloat) alpha );
-(void) setFill;
JSExportAs(initWithCGColor,
-(UIColor *) jsinitWithCGColor: (id) cgColor );
-(UIColor *) colorWithAlphaComponent: (CGFloat) alpha ;
@end
@protocol UIColorClassExports<JSExport, NSSecureCodingClassExports_, NSCopyingClassExports_>
+(UIColor *) colorWithWhite: (CGFloat) white alpha: (CGFloat) alpha ;
+(UIColor *) colorWithPatternImage: (UIImage *) image ;
+(UIColor *) cyanColor;
+(UIColor *) greenColor;
+(UIColor *) orangeColor;
+(UIColor *) colorWithDisplayP3Red: (CGFloat) displayP3Red green: (CGFloat) green blue: (CGFloat) blue alpha: (CGFloat) alpha ;
+(UIColor *) redColor;
+(UIColor *) colorWithRed: (CGFloat) red green: (CGFloat) green blue: (CGFloat) blue alpha: (CGFloat) alpha ;
+(UIColor *) grayColor;
+(UIColor *) purpleColor;
+(UIColor *) brownColor;
+(UIColor *) blackColor;
+(UIColor *) colorWithHue: (CGFloat) hue saturation: (CGFloat) saturation brightness: (CGFloat) brightness alpha: (CGFloat) alpha ;
+(UIColor *) magentaColor;
+(UIColor *) lightGrayColor;
+(UIColor *) colorWithCGColor: (id) cgColor ;
+(UIColor *) darkGrayColor;
+(UIColor *) blueColor;
+(UIColor *) colorWithCIColor: (CIColor *) ciColor ;
+(UIColor *) whiteColor;
+(UIColor *) clearColor;
+(UIColor *) yellowColor;
@end
@protocol UIColorUINSItemProviderCategoryInstanceExports<JSExport, NSItemProviderReadingInstanceExports_, NSItemProviderWritingInstanceExports_>
@end
@protocol UIColorUINSItemProviderCategoryClassExports<JSExport, NSItemProviderReadingClassExports_, NSItemProviderWritingClassExports_>
@end
@protocol CIColorUIKitAdditionsCategoryInstanceExports<JSExport>
JSExportAs(initWithColor,
-(id) jsinitWithColor: (UIColor *) color );
@end
@protocol CIColorUIKitAdditionsCategoryClassExports<JSExport>
@end
@protocol UIColorUIColorNamedColorsCategoryInstanceExports<JSExport>
@end
@protocol UIColorUIColorNamedColorsCategoryClassExports<JSExport>
+(UIColor *) colorNamed: (NSString *) name ;
+(UIColor *) colorNamed: (NSString *) name inBundle: (NSBundle *) bundle compatibleWithTraitCollection: (UITraitCollection *) traitCollection ;
@end
#pragma clang diagnostic pop