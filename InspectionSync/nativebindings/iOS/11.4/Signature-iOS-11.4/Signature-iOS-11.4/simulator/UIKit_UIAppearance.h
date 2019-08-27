#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIAppearance_symbols(JSContext*);
@protocol UIAppearanceInstanceExports_<JSExport, NSObjectInstanceExports_>
@end
@protocol UIAppearanceClassExports_<JSExport, NSObjectClassExports_>
+(id) appearanceWhenContainedInInstancesOfClasses: (NSArray *) containerTypes ;
JSExportAs(appearanceWhenContainedIn,
+(id) jsappearanceWhenContainedIn: (JSValue *) ContainerClass arguments: (NSArray *) args );
+(id) appearance;
+(id) appearanceForTraitCollection: (UITraitCollection *) trait ;
JSExportAs(appearanceForTraitCollectionWhenContainedIn,
+(id) jsappearanceForTraitCollection: (UITraitCollection *) trait whenContainedIn: (JSValue *) ContainerClass arguments: (NSArray *) args );
+(id) appearanceForTraitCollection: (UITraitCollection *) trait whenContainedInInstancesOfClasses: (NSArray *) containerTypes ;
@end
@protocol UIAppearanceContainerInstanceExports_<JSExport, NSObjectInstanceExports_>
@end
@protocol UIAppearanceContainerClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop