#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_NSItemProvider_UIKitAdditions_symbols(JSContext*);
@protocol NSItemProviderUIKitAdditionsCategoryInstanceExports<JSExport>
@property (nonatomic) CGSize preferredPresentationSize;
@property (copy,nonatomic) NSData * teamData;
@property (nonatomic) UIPreferredPresentationStyle preferredPresentationStyle;
@end
@protocol NSItemProviderUIKitAdditionsCategoryClassExports<JSExport>
@end
@protocol UIItemProviderPresentationSizeProvidingInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) CGSize preferredPresentationSizeForItemProvider;
@end
@protocol UIItemProviderPresentationSizeProvidingClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop