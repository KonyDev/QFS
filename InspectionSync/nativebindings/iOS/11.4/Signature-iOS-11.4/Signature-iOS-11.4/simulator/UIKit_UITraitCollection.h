#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UITraitCollection_symbols(JSContext*);
@protocol UITraitCollectionInstanceExports<JSExport, NSCopyingInstanceExports_, NSSecureCodingInstanceExports_>
@property (readonly,nonatomic) UIForceTouchCapability forceTouchCapability;
@property (readonly,nonatomic) UITraitEnvironmentLayoutDirection layoutDirection;
@property (readonly,nonatomic) UIUserInterfaceSizeClass verticalSizeClass;
@property (readonly,nonatomic) UIUserInterfaceIdiom userInterfaceIdiom;
@property (readonly,nonatomic) UIUserInterfaceSizeClass horizontalSizeClass;
@property (readonly,nonatomic) UIDisplayGamut displayGamut;
@property (readonly,nonatomic) CGFloat displayScale;
@property (readonly,copy,nonatomic) UIContentSizeCategory preferredContentSizeCategory;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
-(BOOL) containsTraitsInCollection: (UITraitCollection *) trait ;
-(id) jsinit;
@end
@protocol UITraitCollectionClassExports<JSExport, NSCopyingClassExports_, NSSecureCodingClassExports_>
+(UITraitCollection *) traitCollectionWithLayoutDirection: (UITraitEnvironmentLayoutDirection) layoutDirection ;
+(UITraitCollection *) traitCollectionWithTraitsFromCollections: (NSArray *) traitCollections ;
+(UITraitCollection *) traitCollectionWithDisplayScale: (CGFloat) scale ;
+(UITraitCollection *) traitCollectionWithForceTouchCapability: (UIForceTouchCapability) capability ;
+(UITraitCollection *) traitCollectionWithUserInterfaceIdiom: (UIUserInterfaceIdiom) idiom ;
+(UITraitCollection *) traitCollectionWithHorizontalSizeClass: (UIUserInterfaceSizeClass) horizontalSizeClass ;
+(UITraitCollection *) traitCollectionWithVerticalSizeClass: (UIUserInterfaceSizeClass) verticalSizeClass ;
+(UITraitCollection *) traitCollectionWithDisplayGamut: (UIDisplayGamut) displayGamut ;
+(UITraitCollection *) traitCollectionWithPreferredContentSizeCategory: (UIContentSizeCategory) preferredContentSizeCategory ;
@end
@protocol UITraitEnvironmentInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) UITraitCollection * traitCollection;
-(void) traitCollectionDidChange: (UITraitCollection *) previousTraitCollection ;
@end
@protocol UITraitEnvironmentClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop