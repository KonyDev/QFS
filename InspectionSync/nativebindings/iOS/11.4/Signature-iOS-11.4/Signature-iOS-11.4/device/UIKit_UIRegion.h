#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIRegion_symbols(JSContext*);
@protocol UIRegionInstanceExports<JSExport, NSCopyingInstanceExports_, NSCodingInstanceExports_>
JSExportAs(initWithSize,
-(id) jsinitWithSize: (CGSize) size );
JSExportAs(initWithRadius,
-(id) jsinitWithRadius: (CGFloat) radius );
-(id) regionByIntersectionWithRegion: (UIRegion *) region ;
-(id) inverseRegion;
-(BOOL) containsPoint: (CGPoint) point ;
-(id) regionByUnionWithRegion: (UIRegion *) region ;
-(id) regionByDifferenceFromRegion: (UIRegion *) region ;
@end
@protocol UIRegionClassExports<JSExport, NSCopyingClassExports_, NSCodingClassExports_>
+(UIRegion *) infiniteRegion;
@end
#pragma clang diagnostic pop