#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIImageAsset_symbols(JSContext*);
@protocol UIImageAssetInstanceExports<JSExport, NSSecureCodingInstanceExports_>
-(void) registerImage: (UIImage *) image withTraitCollection: (UITraitCollection *) traitCollection ;
-(id) jsinit;
-(UIImage *) imageWithTraitCollection: (UITraitCollection *) traitCollection ;
-(void) unregisterImageWithTraitCollection: (UITraitCollection *) traitCollection ;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
@end
@protocol UIImageAssetClassExports<JSExport, NSSecureCodingClassExports_>
@end
#pragma clang diagnostic pop