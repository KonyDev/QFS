#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIMotionEffect_symbols(JSContext*);
@protocol UIMotionEffectGroupInstanceExports<JSExport>
@property (copy,nonatomic) NSArray * motionEffects;
@end
@protocol UIMotionEffectGroupClassExports<JSExport>
@end
@protocol UIInterpolatingMotionEffectInstanceExports<JSExport>
@property (nonatomic,strong) id maximumRelativeValue;
@property (nonatomic,strong) id minimumRelativeValue;
@property (readonly,nonatomic) UIInterpolatingMotionEffectType type;
@property (readonly,nonatomic) NSString * keyPath;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
JSExportAs(initWithKeyPathType,
-(id) jsinitWithKeyPath: (NSString *) keyPath type: (UIInterpolatingMotionEffectType) type );
@end
@protocol UIInterpolatingMotionEffectClassExports<JSExport>
@end
@protocol UIMotionEffectInstanceExports<JSExport, NSCopyingInstanceExports_, NSCodingInstanceExports_>
-(NSDictionary *) keyPathsAndRelativeValuesForViewerOffset: (UIOffset) viewerOffset ;
-(id) jsinit;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
@end
@protocol UIMotionEffectClassExports<JSExport, NSCopyingClassExports_, NSCodingClassExports_>
@end
#pragma clang diagnostic pop