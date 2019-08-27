#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_QuartzCore_CATiledLayer_symbols(JSContext*);
@protocol CATiledLayerInstanceExports<JSExport>
@property () CGSize tileSize;
@property () size_t levelsOfDetailBias;
@property () size_t levelsOfDetail;
@end
@protocol CATiledLayerClassExports<JSExport>
+(CFTimeInterval) fadeDuration;
@end
#pragma clang diagnostic pop